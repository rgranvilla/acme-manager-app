import { useNavigate } from "react-router-dom";

import logomark from "../../../assets/logomark.svg";
import arrow_left from "../../../assets/arrow_left.svg";
import add_profile from "../../../assets/add_profile.svg";
import image from "../../../assets/cover02.png";

import { Logomark } from "../../atoms/Logomark";
import {
  ButtonsContainer,
  Container,
  ImageContainer,
  MenuContainer,
} from "./minorLeftSide.styles";
import { MenuButton } from "../../atoms/MenuButton";
import { Button } from "../../atoms/Button";

export function MinorLeftSidePanel() {
  const navigate = useNavigate();

  return (
    <Container>
      <MenuContainer>
        <Logomark image={logomark} title="Logomarca da clínica ACME." />

        <ButtonsContainer>
          <Button
            icon={arrow_left}
            label="Início"
            leftIcon
            callback={() => navigate("/")}
          />

          <MenuButton
            image={add_profile}
            title="Adicionar paciente no sistema."
            callback={() => navigate("/profile/add")}
          />
        </ButtonsContainer>
      </MenuContainer>

      <ImageContainer>
        <img src={image} alt="Logo da clínica ACME" />
      </ImageContainer>
    </Container>
  );
}
