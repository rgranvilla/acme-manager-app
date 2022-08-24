import { PropsWithChildren } from "react";

import { Container } from "./title.styles";

export function Title({ children }: PropsWithChildren) {
  return <Container>{children}</Container>;
}
