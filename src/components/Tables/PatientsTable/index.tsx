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
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactElement, useCallback, useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IMask } from "react-imask";

import { patientTableHeader } from "../../../constants/patientTableHeader";

import { NormalizedPatientDTO } from "../../../dtos/PatientsDTO";
import { useAppDispatch } from "../../../redux/app/hooks";
import { store } from "../../../redux/app/store";
import {
  selectAllPatients,
  selectPatientsFilterByName,
} from "../../../redux/features/patient/patientsSlice";
import { EditPatientModal } from "../../Modals/EditPatientModal";

interface PatientsTableProps {
  refresh: boolean;
  filter: string;
}

export function PatientsTable({
  refresh,
  filter,
}: PatientsTableProps): ReactElement {
  const [data, setData] = useState<NormalizedPatientDTO[] | null>(
    selectAllPatients(store.getState()),
  );

  const [patientId, setPatientId] = useState<string>("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const ReloadData = () => {
    const listAllPatients = selectAllPatients(store.getState());
    setData(listAllPatients);
  };

  const FilterData = useCallback(() => {
    const listFilteredPatients = selectPatientsFilterByName(
      store.getState(),
      filter,
    );
    setData(listFilteredPatients);
  }, [filter]);

  useEffect(() => {
    ReloadData();
  }, [dispatch, refresh]);

  useEffect(() => {
    FilterData();
  }, [FilterData]);

  const handleSelectPatient = (id: string) => {
    setPatientId(id);
    onOpen();
  };

  const onSuccessUpdate = () => {
    ReloadData();
  };

  return (
    <Box h="100%" w="100%" p="4rem">
      <TableContainer>
        <Table variant="striped" colorScheme="gray">
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
                const maskedCpf = IMask.createMask({
                  mask: "000.000.000-00",
                });

                maskedCpf.resolve(documentId);
                return (
                  <Tr key={id} h="fit-content">
                    <Td>
                      {id && (
                        <Button
                          variant="outline"
                          onClick={() => handleSelectPatient(id)}
                          size="sm"
                          bg="linkedin.300"
                          border="0"
                          color="white"
                          _hover={{
                            opacity: "0.8",
                          }}
                          p="0.5rem"
                        >
                          Editar
                        </Button>
                      )}
                    </Td>
                    <Td>{patientName}</Td>
                    <Td>{bornDate.toString()}</Td>
                    <Td>{maskedCpf.value}</Td>
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
      <EditPatientModal
        onClose={onClose}
        isOpen={isOpen}
        patientId={patientId}
        onSuccess={() => onSuccessUpdate()}
      />
    </Box>
  );
}
