import { Dashboard } from "../../components/organisms/Dashboard";
import { LeftSidePanel } from "../../components/organisms/LeftSidePanel";

import { Container } from "./home.styles";

export function Home() {
  return (
    <Container>
      <LeftSidePanel />
      <Dashboard />
    </Container>
  );
}
