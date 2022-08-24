export interface DataPropsDTO {
  id: string;
  name: string;
  bornDate: string;
  document_id: string;
  genre: "masculino" | "feminino";
  address: string;
  status: boolean;
}

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
  data: Array<DataPropsDTO>;
  header: HeaderPropsDTO;
}
