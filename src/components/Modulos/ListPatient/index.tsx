import { Layout } from "../../Layout";
import { PatientList } from "../PatientList";

export function ListPatient() {
  return <Layout rightSide={<PatientList />} />;
}
