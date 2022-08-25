/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
import { FormHandles, SubmitHandler } from "@unform/core";
import { Form as UnForm } from "@unform/web";
import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

import { v4 as uuidV4 } from "uuid";

import { toast } from "react-toastify";
import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { Title } from "../../atoms/Title";

import { PatientDataDTO, usePatients } from "../../../hooks/patients";
import {
  Container,
  FormContainer,
  HorizontalDivider,
  RowContainer,
} from "./patientForm.styles";

interface PatientFormProps {
  title: string;
}

export function PatientForm({ title }: PatientFormProps) {
  const formRef = useRef<FormHandles>(null);

  const { addPatient, getPatientById } = usePatients();

  const navigate = useNavigate();
  const params = useParams();
  const patientId = params?.id;

  async function handleSubmit(data: PatientDataDTO): Promise<void> {
    try {
      formRef.current?.setErrors({});

      const formSubmitData = formRef.current?.getData() as PatientDataDTO;
      const { name, bornDate, documentId, genre, address } = formSubmitData;

      const newData: PatientDataDTO = {
        id: uuidV4(),
        name,
        bornDate,
        documentId,
        genre,
        address,
        status: true,
      };

      const schema = Yup.object().shape({
        name: Yup.string().required(),
        bornDate: Yup.date().required(),
        documentId: Yup.string().required(),
        genre: Yup.string().required(),
        address: Yup.string().required(),
      });

      await schema.validate(formSubmitData, {
        abortEarly: false,
      });

      addPatient(newData);

      navigate("/list");
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.log(err);
      }
    }
  }

  useEffect(() => {
    let patient;
    if (patientId) {
      patient = getPatientById(patientId);
    }

    if (patient) {
      formRef.current?.setData(patient);
    }
  }, [getPatientById, params.id, patientId]);

  return (
    <Container>
      <Title>{title}</Title>
      <HorizontalDivider />
      <UnForm ref={formRef} onSubmit={(data) => handleSubmit(data)}>
        <FormContainer>
          <RowContainer>
            <Input
              name="id"
              label="Código"
              disabled
              style={{
                background: "#cccccc",
                height: "100%",
                width: "100%",
              }}
            />
            <Input name="bornDate" label="Nascimento" />
            <Input name="status" label="Status" />
          </RowContainer>
          <RowContainer>
            <Input name="name" label="Nome" />
            <Input name="documentId" label="CPF" />
            <Input name="genre" label="Sexo" />
          </RowContainer>

          <Input name="address" label="Endereço" fullWidth />
          <HorizontalDivider />
          <div>
            <Button
              type="submit"
              label="Salvar"
              onClick={() => formRef.current?.submitForm()}
            />
            <Button
              type="button"
              label="Cancelar"
              invertedColor
              callback={() => navigate("/")}
            />
          </div>
        </FormContainer>
      </UnForm>
    </Container>
  );
}
