export interface PatientDTO {
  id?: string;
  name: string;
  bornDate: Date;
  documentId: string;
  gender: string;
  address: string;
  status?: "Ativo" | "Inativo" | undefined;
}

export type PatientsDTO = PatientDTO[];

export interface ColumnsPropsDTO {
  id: string;
  label: string;
}

export interface HeaderPropsDTO {
  tableTitle: string;
  columns: Array<ColumnsPropsDTO>;
}

export interface TablePatientsDTO {
  data: PatientDTO[] | null;
  header: HeaderPropsDTO;
}
