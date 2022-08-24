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
import { IconButton } from "../../atoms/IconButton";

export function MinorLeftSidePanel() {
  return (
    <Container>
      <MenuContainer>
        <Logomark image={logomark} title="Logomarca da clínica ACME." />

        <ButtonsContainer>
          <IconButton icon={arrow_left} title="Início" leftIcon link="/" />

          <MenuButton
            image={add_profile}
            title="Adicionar paciente no sistema."
            link="/profile/add"
          />
        </ButtonsContainer>
      </MenuContainer>

      <ImageContainer>
        <img src={image} alt="Logo da clínica ACME" />
      </ImageContainer>
    </Container>
  );
}
