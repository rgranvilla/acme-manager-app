import { PatientForm } from "../../components/organisms/PatientForm";
import { LeftSidePanel } from "../../components/organisms/LeftSidePanel";

import { Container } from "./addProfile.styles";

export function AddProfile() {
  return (
    <Container>
      <LeftSidePanel />
      <PatientForm title="Cadastrar Paciente" />
    </Container>
  );
}
