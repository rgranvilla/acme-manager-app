import { PatientForm } from "../../components/organisms/PatientForm";
import { LeftSidePanel } from "../../components/organisms/LeftSidePanel";

import { Container } from "./editProfile.styles";

export function EditProfile() {
  return (
    <Container>
      <LeftSidePanel />
      <PatientForm title="Editar cadastro" />
    </Container>
  );
}
