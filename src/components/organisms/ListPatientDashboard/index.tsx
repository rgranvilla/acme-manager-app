import { SearchInput } from "../../molecules/SearchInput";

import { Title } from "../../atoms/Title";
import {
  Container,
  TableBody,
  TableContainer,
  TableFooter,
  TablePreHeader,
} from "./listPatientDashboard.styles";

export function ListPatientDashboard() {
  return (
    <Container>
      <Title>Lista de pacientes</Title>
      <TableContainer>
        <TablePreHeader>
          <SearchInput />
        </TablePreHeader>
        <TableBody>Corpo</TableBody>
        <TableFooter>Footer</TableFooter>
      </TableContainer>
    </Container>
  );
}
