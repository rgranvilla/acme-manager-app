import { Title } from "../../atoms/Title";
import { DashboardButtonsBar } from "../../molecules/DashboardButtonsBar";

import { BarButtons, Container } from "./dashboard.styles";

export function Dashboard() {
  return (
    <Container>
      <Title>Gestão de Clientes</Title>
      <BarButtons>
        <DashboardButtonsBar />
      </BarButtons>
    </Container>
  );
}
