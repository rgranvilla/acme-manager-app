import {
  Box,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Button,
  Td,
  Tbody,
} from "@chakra-ui/react";
import { ReactElement, useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { patientTableHeader } from "../../../constants/patientTableHeader";

import { PatientDTO } from "../../../dtos/PatientsDTO";
import { useAppDispatch } from "../../../redux/app/hooks";
import { store } from "../../../redux/app/store";
import { selectAllPatients } from "../../../redux/features/patient/patientsSlice";

export function PatientsTable(): ReactElement {
  const [data, setData] = useState<PatientDTO[] | null>(
    selectAllPatients(store.getState()),
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const listAllPatients = selectAllPatients(store.getState());
    setData(listAllPatients);
  }, [dispatch]);

  const handleSelectPatient = (path: string) => {
    navigate(path);
  };

  return (
    <Box h="100%" w="100%" p="4rem">
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              {patientTableHeader.columns.map(({ id, label }) => {
                return <Th key={id}>{label}</Th>;
              })}
            </Tr>
          </Thead>
          <Tbody>
            {data?.map(
              ({
                id,
                patientName,
                bornDate,
                documentId,
                address,
                gender,
                status,
              }) => {
                return (
                  <Tr key={id}>
                    <Td>
                      {id && (
                        <Button
                          rightIcon={<MdKeyboardArrowRight size={24} />}
                          colorScheme="teal"
                          variant="outline"
                          onClick={() =>
                            handleSelectPatient(`/profile/edit/${id}`)
                          }
                        />
                      )}
                    </Td>
                    <Td>{patientName}</Td>
                    <Td>{bornDate.toString()}</Td>
                    <Td isNumeric>{documentId}</Td>
                    <Td>{gender}</Td>
                    <Td>{address}</Td>
                    <Td>{status}</Td>
                  </Tr>
                );
              },
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
