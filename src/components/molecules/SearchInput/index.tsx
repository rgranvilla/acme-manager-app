import { useRef } from "react";
import { SubmitHandler, FormHandles } from "@unform/core";
import { Form as UnForm } from "@unform/web";
import { MdSearch } from "react-icons/md";

import { Container } from "./searchInput.styles";

import { Input } from "../../atoms/Input";

interface FormData {
  name: string;
  email: string;
}

export function SearchInput() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    // do some thing...
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
        />
      </UnForm>
    </Container>
  );
}
