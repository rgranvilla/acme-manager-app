import logo from "../../../assets/logo.svg";
import image from "../../../assets/cover01.png";

import {
  Container,
  ImageContainer,
  LogoContainer,
} from "./leftSidePanel.styles";

export function LeftSidePanel() {
  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt="Logo da clínica ACME" />
      </LogoContainer>

      <ImageContainer>
        <img src={image} alt="Logo da clínica ACME" />
      </ImageContainer>
    </Container>
  );
}
