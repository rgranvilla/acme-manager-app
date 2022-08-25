/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from "react";
import { SubmitHandler, FormHandles } from "@unform/core";

import { Form as UnForm } from "@unform/web";
import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { Title } from "../../atoms/Title";

import {
  Container,
  FormContainer,
  HorizontalDivider,
  RowContainer,
} from "./patientForm.styles";

interface PatientFormProps {
  title: string;
}

interface FormData {
  name: string;
}

export function PatientForm({ title }: PatientFormProps) {
  const formRef = useRef<FormHandles>(null);

  const navigate = useNavigate();

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log("saved");
  };

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
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "2rem",
              width: "100%",
            }}
          >
            <Button type="submit" label="Salvar" />
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
