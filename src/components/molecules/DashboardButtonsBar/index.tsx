import add_profile from "../../../assets/add_profile.svg";
import edit_profile from "../../../assets/edit_profile.svg";
import search_profile from "../../../assets/search_profile.svg";

import { DashboardButton } from "../../atoms/DashboardButton";
import { Container } from "./dashboardButtonsBar.styles";

export function DashboardButtonsBar() {
  return (
    <Container>
      <DashboardButton
        image={add_profile}
        title="Adicionar"
        link="/profiles/add"
      />

      <DashboardButton
        image={edit_profile}
        title="Editar"
        link="/profiles/edit"
      />

      <DashboardButton image={search_profile} title="Buscar" link="/list" />
    </Container>
  );
}
