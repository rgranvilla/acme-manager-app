/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
import { FormHandles, SubmitHandler, useField } from "@unform/core";
import { Form as UnForm } from "@unform/web";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { v4 as uuidV4 } from "uuid";

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

  const handleSubmit: SubmitHandler<FormData> = useCallback(() => {
    formRef.current?.setErrors({});

    try {
      const { name, bornDate, documentId, genre, address } =
        formRef.current?.getData() as PatientDataDTO;

      const newData: PatientDataDTO = {
        id: uuidV4(),
        name,
        bornDate,
        documentId,
        genre,
        address,
        status: true,
      };

      addPatient(newData);

      navigate("/list");
    } catch (err) {
      console.log(err);
    }
  }, [addPatient, navigate]);

  const handleSetData = () => {};

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
      <UnForm ref={formRef} onSubmit={handleSubmit}>
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
