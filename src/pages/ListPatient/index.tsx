import { ListPatientDashboard } from "../../components/organisms/ListPatientDashboard";
import { MinorLeftSidePanel } from "../../components/organisms/MinorLeftSidePanel";

import { Container } from "./listPatient.styles";

export function ListPatient() {
  return (
    <Container>
      <MinorLeftSidePanel />
      <ListPatientDashboard />
    </Container>
  );
}
