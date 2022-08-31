/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable no-console */
import { useNavigate } from "react-router-dom";

// forms and validation
import {
  Box,
  Button,
  Divider,
  Flex,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// reducers react-toolkit
import {
  createPatient,
  sortPatients,
} from "../../../redux/features/patient/patientsSlice";
import { useAppDispatch } from "../../../redux/app/hooks";

// inputs and selectors
import { Input } from "../CommonsField/Input";
import { Select } from "../CommonsField/Select";

// interfaces
enum GenderEnum {
  male = "Masculino",
  female = "Feminino",
}
interface CreatePatientFormData {
  patientName: string;
  bornDate: Date;
  documentId: string;
  gender: GenderEnum;
  address: string;
}
interface CreatePatientFrom {
  onClose: () => void;
}

// yup schema validation
const createPatientFormSchema = yup.object().shape({
  patientName: yup.string().required("Nome completo do paciente é obrigarório"),
  bornDate: yup.date().required("Data de nascimento do paciente é obrigatória"),
  documentId: yup.string().max(11).required("O CPF do paciente é obrigatório"),
  gender: yup
    .string()
    .oneOf(["Masculino", "Feminino"])
    .required("É necessário selecionar um gênero"),
  address: yup.string(),
});

// MAIN CODE
export function CreatePatientForm({ onClose }: CreatePatientFrom) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, formState } = useForm<CreatePatientFormData>({
    resolver: yupResolver(createPatientFormSchema),
  });

  const { errors } = formState;

  const handleCreatePatient: SubmitHandler<CreatePatientFormData> = (
    values,
  ) => {
    try {
      dispatch(createPatient(values));
      dispatch(sortPatients());

      onClose();
      navigate("/list");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit(handleCreatePatient)}>
      <ModalHeader>Inserir Paciente</ModalHeader>
      <ModalCloseButton />

      <Divider />

      <ModalBody>
        <Flex gap="1rem" pb="0.75rem" pt="1rem">
          <Input
            label="Nome"
            type="text"
            isRequired
            placeholder="digite o nome completo..."
            error={errors.patientName}
            {...register("patientName")}
          />
          <Input
            label="CPF"
            type="text"
            isRequired
            placeholder="digite o cpf..."
            error={errors.documentId}
            {...register("documentId")}
          />
        </Flex>

        <Flex gap="1rem" pb="0.75rem">
          <Select
            label="Gênero"
            isRequired
            placeholder="selecione o sexo..."
            error={errors.gender}
            {...register("gender")}
          >
            <option value={GenderEnum.female}>Feminino</option>
            <option value={GenderEnum.male}>Masculino</option>
          </Select>

          <Input
            label="Data de nascimento"
            type="date"
            isRequired
            error={errors.bornDate}
            {...register("bornDate")}
          />
        </Flex>

        <Flex pb="1.25rem">
          <Input
            label="Endereço"
            type="text"
            placeholder="digite o endereço ..."
            error={errors.address}
            {...register("address")}
          />
        </Flex>
      </ModalBody>

      <Divider />

      <ModalFooter>
        <Button
          type="submit"
          colorScheme="teal"
          mr={3}
          isLoading={formState.isSubmitting}
        >
          Salvar
        </Button>
        <Button variant="ghost" onClick={onClose}>
          Cancelar
        </Button>
      </ModalFooter>
    </Box>
  );
}
