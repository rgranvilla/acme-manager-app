import erro404 from "../../../assets/erro_404.jpg";
import arrow_left from "../../../assets/arrow_left.svg";

import { IconButton } from "../../atoms/IconButton";
import { Container } from "./inexistentRoute.styles";

export function InexistentRoute() {
  return (
    <Container>
      <img src={erro404} alt="Página não encontrada" />
      <h1>Página Inexistente</h1>
      <p>Você digitou um endereço que não existe em nossa aplicação.</p>
      <p>Clique no botão abaixo para voltar a página inicial.</p>
      <IconButton icon={arrow_left} title="Início" leftIcon link="/" />
    </Container>
  );
}
