import { SearchInput } from "../../molecules/SearchInput";

import { Title } from "../../atoms/Title";
import {
  Container,
  TableBody,
  TableContainer,
  TableFooter,
  TablePreHeader,
} from "./listPatientDashboard.styles";
import { Table } from "../Table";

// dados para teste
import { data, header } from "./dataMock";

export function ListPatientDashboard() {
  return (
    <Container>
      <Title>Lista de pacientes</Title>
      <TableContainer>
        <TablePreHeader>
          <SearchInput />
        </TablePreHeader>
        <TableBody>
          <Table data={data} header={header} />
        </TableBody>
      </TableContainer>
    </Container>
  );
}
