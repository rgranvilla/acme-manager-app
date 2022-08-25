/* eslint-disable @typescript-eslint/unbound-method */
import { useRef } from "react";
import { SubmitHandler, FormHandles } from "@unform/core";
import { Form as UnForm } from "@unform/web";
import { MdSearch } from "react-icons/md";

import { Container } from "./searchInput.styles";

import { Input } from "../../atoms/Input";
import { PatientDataDTO, usePatients } from "../../../hooks/patients";

interface SearchProps {
  filtered: (data: PatientDataDTO[] | null) => void;
}
interface FormData {
  name: string;
}

export function SearchInput({ filtered }: SearchProps): JSX.Element {
  const formRef = useRef<FormHandles>(null);

  const { filterPatientByName } = usePatients();

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    filtered(filterPatientByName(data.name));
  };

  return (
    <Container>
      <UnForm ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="name"
          placeholder="buscar por nome..."
          type="search"
          autoComplete="true"
          autoFocus
          icon={<MdSearch size={24} />}
          onBlur={() => formRef.current?.submitForm()}
        />
      </UnForm>
    </Container>
  );
}
