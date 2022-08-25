import { ToastContainer } from "react-toastify";
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

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <ImageContainer>
        <img src={image} alt="Logo da clínica ACME" />
      </ImageContainer>
    </Container>
  );
}
