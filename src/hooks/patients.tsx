import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { v4 as uuidV4 } from "uuid";

import usePersistedState from "../utils/usePersistedState";

export interface PatientDataDTO {
  id: string;
  name: string;
  bornDate: string;
  documentId: string;
  genre: string;
  address: string;
  status: boolean;
}

interface PatientsContextData {
  addPatient(patient: PatientDataDTO): void;
  listPatients(): PatientDataDTO[];
  getPatientById(id: string): PatientDataDTO | null;
  filterPatientByName(name: string): PatientDataDTO[] | null;
  savePatient(patient: PatientDataDTO): void;
  removePatient(id: string): void;
  changePatientStatus(id: string): void;
}

const dataMock: PatientDataDTO[] = [
  {
    id: uuidV4(),
    name: "Renan Granvilla Oliveira",
    bornDate: "05/05/1981",
    documentId: "054.929.596-89",
    genre: "masculino",
    address: "Rua Sapé 776 - apto 238, bairro Passo D'Areia, Porto Alegre/RS",
    status: false,
  },
  {
    id: uuidV4(),
    name: "Alan Granvilla Oliveira",
    bornDate: "05/05/1981",
    documentId: "054.929.596-89",
    genre: "masculino",
    address: "Rua Sapé 776 - apto 238, bairro Passo D'Areia, Porto Alegre/RS",
    status: true,
  },
  {
    id: uuidV4(),
    name: "Bruna Granvilla Oliveira",
    bornDate: "05/05/1981",
    documentId: "054.929.596-89",
    genre: "feminino",
    address: "Rua Sapé 776 - apto 238, bairro Passo D'Areia, Porto Alegre/RS",
    status: true,
  },
  {
    id: uuidV4(),
    name: "Vanessa Granvilla Oliveira",
    bornDate: "05/05/1981",
    documentId: "054.929.596-89",
    genre: "feminino",
    address: "Rua Sapé 776 - apto 238, bairro Passo D'Areia, Porto Alegre/RS",
    status: false,
  },
  {
    id: uuidV4(),
    name: "Atila Granvilla Oliveira",
    bornDate: "05/05/1981",
    documentId: "054.929.596-89",
    genre: "masculino",
    address: "Rua Sapé 776 - apto 238, bairro Passo D'Areia, Porto Alegre/RS",
    status: false,
  },
  {
    id: uuidV4(),
    name: "Ricardo Granvilla Oliveira",
    bornDate: "05/05/1981",
    documentId: "054.929.596-89",
    genre: "masculino",
    address: "Rua Sapé 776 - apto 238, bairro Passo D'Areia, Porto Alegre/RS",
    status: true,
  },
  {
    id: uuidV4(),
    name: "Franscica Granvilla Oliveira",
    bornDate: "05/05/1981",
    documentId: "054.929.596-89",
    genre: "feminino",
    address: "Rua Sapé 776 - apto 238, bairro Passo D'Areia, Porto Alegre/RS",
    status: true,
  },
];

const PatientContext = createContext<PatientsContextData>(
  {} as PatientsContextData,
);

function PatientsProvider({ children }: PropsWithChildren) {
  const [data, setData] = usePersistedState<PatientDataDTO[]>(
    "@ClinicaAcme",
    dataMock,
  );

  const addPatient = useCallback(
    ({
      id,
      name,
      bornDate,
      documentId,
      genre,
      address,
      status,
    }: PatientDataDTO): void => {
      const patient = {
        id,
        name,
        bornDate,
        documentId,
        genre,
        address,
        status,
      };

      setData([...data, patient]);
    },
    [data, setData],
  );

  const listPatients = useCallback((): PatientDataDTO[] => {
    return data;
  }, [data]);

  const getPatientById = useCallback(
    (id: string): PatientDataDTO | null => {
      const patient = data.find((element) => element.id === id);

      if (patient) {
        return patient;
      }

      return null;
    },
    [data],
  );

  const filterPatientByName = useCallback(
    (name: string): PatientDataDTO[] | null => {
      const patient = data.filter((element) =>
        element.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()),
      );

      if (patient) {
        return patient;
      }

      return null;
    },
    [data],
  );

  const removePatient = useCallback(
    (id: string): void => {
      setData((patient) => patient.filter((element) => element.id !== id));
    },
    [setData],
  );

  const savePatient = useCallback(
    ({
      id,
      name,
      bornDate,
      documentId,
      genre,
      address,
      status,
    }: PatientDataDTO) => {
      removePatient(id);

      const patient = {
        id,
        name,
        bornDate,
        documentId,
        genre,
        address,
        status,
      };

      setData([...data, patient]);
    },
    [data, removePatient, setData],
  );

  const changePatientStatus = useCallback(
    (id: string): void => {
      const patient = getPatientById(id);

      if (patient) {
        const { name, bornDate, documentId, genre, address, status } = patient;
        const newStatus = !status;
        savePatient({
          id,
          name,
          bornDate,
          documentId,
          genre,
          address,
          status: newStatus,
        });
      }
    },
    [getPatientById, savePatient],
  );

  const value = useMemo(
    () => ({
      addPatient,
      listPatients,
      getPatientById,
      filterPatientByName,
      removePatient,
      savePatient,
      changePatientStatus,
    }),
    [
      addPatient,
      changePatientStatus,
      filterPatientByName,
      getPatientById,
      listPatients,
      removePatient,
      savePatient,
    ],
  );

  return (
    <PatientContext.Provider value={value}>{children}</PatientContext.Provider>
  );
}

export { PatientsProvider };

export function usePatients(): PatientsContextData {
  const context = useContext(PatientContext);

  if (!context) {
    // eslint-disable-next-line no-console
    console.error("Erro");
  }

  return context;
}
