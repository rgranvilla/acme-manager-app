import { useNavigate } from "react-router-dom";
import {
  Button,
  Divider,
  Flex,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  createPatient,
  sortPatients,
} from "../../../redux/features/patient/patientsSlice";
import { useAppDispatch } from "../../../redux/app/hooks";

import { Input } from "../CommonsField/Input";
import { Select } from "../CommonsField/Select";

interface FormData {
  name: string;
  bornDate: Date;
  documentId: string;
  gender: "Masculino" | "Feminino";
  address: string;
}

interface CreatePatientFrom {
  onClose: () => void;
}

export function CreatePatientForm({ onClose }: CreatePatientFrom) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function create(data: FormData): void {
    const { name, bornDate, documentId, gender, address } = data;

    dispatch(createPatient(name, bornDate, documentId, gender, address));
    dispatch(sortPatients());
  }

  const handleSubmit = () => {
    // TODO
  };
  return (
    <>
      <ModalHeader>Inserir Paciente</ModalHeader>
      <ModalCloseButton />

      <Divider />

      <ModalBody>
        <Flex gap="1rem" pb="0.75rem" pt="1rem">
          <Input
            name="name"
            label="Nome"
            type="text"
            isRequired
            placeholder="digite o nome completo..."
          />
          <Input
            name="documentId"
            label="CPF"
            type="text"
            isRequired
            placeholder="digite o cpf..."
          />
        </Flex>

        <Flex gap="1rem" pb="0.75rem">
          <Select
            name="gender"
            label="Gênero"
            isRequired
            placeholder="selecione o sexo..."
          >
            <option value="female">Feminino</option>
            <option value="male">Masculino</option>
          </Select>

          <Input
            name="bornDate"
            label="Data de nascimento"
            type="date"
            isRequired
          />
        </Flex>

        <Flex pb="1.25rem">
          <Input
            name="address"
            label="Endereço"
            type="text"
            placeholder="digite o endereço ..."
          />
        </Flex>
      </ModalBody>

      <Divider />

      <ModalFooter>
        <Button type="submit" colorScheme="teal" mr={3}>
          Salvar
        </Button>
        <Button variant="ghost" onClick={onClose}>
          Cancelar
        </Button>
      </ModalFooter>
    </>
  );
}
