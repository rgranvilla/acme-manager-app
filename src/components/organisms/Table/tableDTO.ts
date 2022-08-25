import { PatientDataDTO } from "../../../hooks/patients";

export interface ColumnsPropsDTO {
  id: string;
  label: string;
  vert_Align?: "top" | "middle" | "bottom";
  hor_Align?: "left" | "right" | "center" | "justify" | "char";
  isBolded: boolean;
  capitalize: boolean;
}

export interface HeaderPropsDTO {
  tableTitle: string;
  columns: Array<ColumnsPropsDTO>;
}

export interface TablePropsDTO {
  data: PatientDataDTO[] | null;
  header: HeaderPropsDTO;
}
