import { useEffect, useState } from "react";
import { v4 as uuidV4 } from "uuid";

import { HeaderPropsDTO } from "../Table/tableDTO";
import { PatientDataDTO, usePatients } from "../../../hooks/patients";

import { SearchInput } from "../../molecules/SearchInput";
import { Title } from "../../atoms/Title";
import { Table } from "../Table";

import {
  Container,
  TableBody,
  TableContainer,
  TablePreHeader,
} from "./listPatientDashboard.styles";

const header: HeaderPropsDTO = {
  tableTitle: "Lista de pacientes",
  columns: [
    {
      id: "d52fa4f3-07ab-492e-83af-350edc18665e",
      label: "",
      vert_Align: "top",
      hor_Align: "center",
      isBolded: false,
      capitalize: true,
    },
    {
      id: "b6107025-934d-4f79-9c2d-2b8530c1b0e1",
      label: "Nome",
      vert_Align: "top",
      hor_Align: "left",
      isBolded: true,
      capitalize: true,
    },
    {
      id: "68b47d46-023f-40da-a59e-b5ec0d682b5a",
      label: "Data de nascimento",
      vert_Align: "top",
      hor_Align: "center",
      isBolded: true,
      capitalize: true,
    },
    {
      id: "e6808b26-a52e-4adb-b3fb-05f61882072f",
      label: "CPF",
      vert_Align: "top",
      hor_Align: "center",
      isBolded: true,
      capitalize: true,
    },
    {
      id: "945183ae-9d81-4227-b062-1eafd0d10342",
      label: "Sexo",
      vert_Align: "top",
      hor_Align: "center",
      isBolded: true,
      capitalize: true,
    },
    {
      id: "3a9b772e-c9c1-4ac2-8041-760397aeefde",
      label: "Endereço",
      vert_Align: "top",
      hor_Align: "left",
      isBolded: true,
      capitalize: true,
    },
    {
      id: "1a54047f-5145-46a5-8c55-afc084b7fda5",
      label: "Status",
      vert_Align: "top",
      hor_Align: "center",
      isBolded: true,
      capitalize: true,
    },
  ],
};

export function ListPatientDashboard() {
  const [data, setData] = useState<PatientDataDTO[] | null>([
    {
      id: uuidV4(),
      name: "Ricardo Granvilla Oliveira",
      bornDate: "05/05/1981",
      documentId: "054.929.596-89",
      genre: "masculino",
      address: "Rua Sapé 776 - apto 238, bairro Passo D'Areia, Porto Alegre/RS",
      status: true,
    },
  ]);
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { listPatients } = usePatients();

  useEffect(() => {
    setData(listPatients());
  }, [setData, listPatients]);

  return (
    <Container>
      <Title>Lista de pacientes</Title>
      <TableContainer>
        <TablePreHeader>
          <SearchInput filtered={(filtered) => setData(filtered)} />
        </TablePreHeader>
        <TableBody>
          <Table data={data} header={header} />
        </TableBody>
      </TableContainer>
    </Container>
  );
}
