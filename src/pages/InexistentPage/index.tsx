import { InexistentRoute } from "../../components/organisms/InexistentRoute";
import { LeftSidePanel } from "../../components/organisms/LeftSidePanel";

import { Container } from "./inexistentPage.styles";

export function InexistentPage() {
  return (
    <Container>
      <LeftSidePanel />
      <InexistentRoute />
    </Container>
  );
}
