import { useNavigate } from "react-router-dom";

import add_profile from "../../../assets/add_profile.svg";
import edit_profile from "../../../assets/edit_profile.svg";
import search_profile from "../../../assets/search_profile.svg";

import { DashboardButton } from "../../atoms/DashboardButton";
import { Container } from "./dashboardButtonsBar.styles";

export function DashboardButtonsBar() {
  const navigate = useNavigate();

  return (
    <Container>
      <DashboardButton
        image={add_profile}
        title="Adicionar"
        callback={() => navigate("/profile/add")}
      />

      <DashboardButton
        image={search_profile}
        title="Buscar"
        callback={() => navigate("/list")}
      />
    </Container>
  );
}
