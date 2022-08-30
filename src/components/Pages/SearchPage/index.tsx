import { Layout } from "../../Layout";
import { PatientList } from "../../Modulos/PatientList";

export function SearchPage() {
  return <Layout rightSide={<PatientList />} />;
}
