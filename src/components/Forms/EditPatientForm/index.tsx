/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable no-console */
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
import { format, parse } from "date-fns";
import { useEffect, useState } from "react";
import {
  updatePatient,
  sortPatients,
  selectPatientById,
} from "../../../redux/features/patient/patientsSlice";
import { useAppDispatch } from "../../../redux/app/hooks";
import { store } from "../../../redux/app/store";

// inputs and selectors
import { Input } from "../CommonsField/Input";
import { Select } from "../CommonsField/Select";
import { StatusEnum } from "../../../dtos/PatientsDTO";

enum GenderEnum {
  male = "Masculino",
  female = "Feminino",
}
interface EditPatientFormData {
  id: string;
  patientName: string;
  bornDate: Date;
  documentId: string;
  gender: GenderEnum;
  address: string;
  status: StatusEnum;
}
interface CreatePatientFrom {
  onClose: () => void;
  onSuccess: () => void;
  patientId: string;
}

const createPatientFormSchema = yup.object().shape({
  patientName: yup.string().required("Nome completo do paciente é obrigarório"),
  bornDate: yup.date().required("Data de nascimento do paciente é obrigatória"),
  documentId: yup.string().required("O CPF do paciente é obrigatório"),
  gender: yup
    .string()
    .oneOf(["Masculino", "Feminino"])
    .required("É necessário selecionar um gênero"),
  address: yup.string(),
  status: yup
    .string()
    .oneOf(["Ativo", "Inativo"])
    .required("É necessário selecionar um status"),
});

export function EditPatientForm({
  onClose,
  patientId,
  onSuccess,
}: CreatePatientFrom) {
  const dispatch = useAppDispatch();

  const [normalizedDate, setNormalizedDate] = useState<string>("");

  const activePatient = selectPatientById(store.getState(), patientId);

  useEffect(() => {
    if (activePatient) {
      const activeBornDate = activePatient.bornDate.split("/");
      const [day, month, year] = activeBornDate;
      setNormalizedDate(`${year}-${month}-${day}`);
    }
  }, [activePatient, setNormalizedDate]);

  const { register, handleSubmit, formState } = useForm<EditPatientFormData>({
    resolver: yupResolver(createPatientFormSchema),
  });

  const { errors } = formState;

  const handleEditPatient: SubmitHandler<EditPatientFormData> = (values) => {
    const { bornDate } = values;

    const normalizedValues = {
      ...values,
      bornDate: format(bornDate, "dd/MM/yyyy").toString(),
    };
    try {
      dispatch(updatePatient(normalizedValues));
      dispatch(sortPatients());

      onClose();
      onSuccess();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit(handleEditPatient)}>
      <ModalHeader>Inserir Paciente</ModalHeader>
      <ModalCloseButton />

      <Divider />

      <ModalBody>
        <Flex gap="1rem" pb="0.75rem" pt="1rem">
          <Input
            label="Código Paciente"
            type="text"
            isReadOnly
            defaultValue={activePatient?.id}
            {...register("id")}
            bg="gray.300"
            color="gray.500"
          />
          <Select
            label="Status"
            isRequired
            error={errors.status}
            {...register("status")}
          >
            <option selected={activePatient?.status === StatusEnum.actived}>
              Ativo
            </option>
            <option selected={activePatient?.status === StatusEnum.inactived}>
              Inativo
            </option>
          </Select>
        </Flex>
        <Flex gap="1rem" pb="0.75rem" pt="1rem">
          <Input
            label="Nome"
            type="text"
            isRequired
            placeholder="digite o nome completo..."
            defaultValue={activePatient?.patientName}
            error={errors.patientName}
            {...register("patientName")}
          />
          <Input
            label="CPF"
            type="text"
            isRequired
            placeholder="digite o cpf..."
            defaultValue={activePatient?.documentId}
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
            <option selected={activePatient?.gender === GenderEnum.female}>
              Feminino
            </option>
            <option selected={activePatient?.gender === GenderEnum.male}>
              Masculino
            </option>
          </Select>

          <Input
            label="Data de nascimento"
            type="date"
            isRequired
            defaultValue={normalizedDate}
            error={errors.bornDate}
            {...register("bornDate")}
          />
        </Flex>

        <Flex pb="1.25rem">
          <Input
            label="Endereço"
            type="text"
            placeholder="digite o endereço ..."
            defaultValue={activePatient?.address}
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
