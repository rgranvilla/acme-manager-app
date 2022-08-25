import { useNavigate } from "react-router-dom";

import erro404 from "../../../assets/erro_404.jpg";
import arrow_left from "../../../assets/arrow_left.svg";

import { Container } from "./inexistentRoute.styles";
import { Button } from "../../atoms/Button";

export function InexistentRoute() {
  const navigate = useNavigate();
  return (
    <Container>
      <img src={erro404} alt="Página não encontrada" />
      <h1>Página Inexistente</h1>
      <p>O endereço web fornecido não existe em nossa aplicação.</p>
      <p>Clique no botão abaixo para voltar a página inicial.</p>
      <Button
        icon={arrow_left}
        label="Início"
        leftIcon
        callback={() => navigate("/")}
      />
    </Container>
  );
}
