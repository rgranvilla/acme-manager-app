import { Layout } from "../../Layout";
import { Dashboard } from "../../Modulos/Dashboard";

export function Home() {
  return <Layout rightSide={<Dashboard />} />;
}
