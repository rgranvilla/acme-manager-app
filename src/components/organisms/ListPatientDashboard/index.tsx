import { Title } from "../../atoms/Title";
import { Container, TableContainer } from "./listPatientDashboard.styles";

export function ListPatientDashboard() {
  return (
    <Container>
      <Title>Lista de pacientes</Title>
      <TableContainer />
    </Container>
  );
}
