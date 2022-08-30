export enum GenderEnum {
  male = "Masculino",
  female = "Feminino",
}

export enum StatusEnum {
  actived = "Ativo",
  inactived = "Inativado",
}

export interface PatientDTO {
  id?: string;
  patientName: string;
  bornDate: Date;
  documentId: string;
  gender: GenderEnum;
  address: string;
  status?: StatusEnum | undefined;
}

export interface PatientReducerDTO {
  patientName: string;
  bornDate: Date;
  documentId: string;
  gender: GenderEnum;
  address: string;
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
