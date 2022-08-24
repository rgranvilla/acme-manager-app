import { ButtonHTMLAttributes, ReactNode } from "react";

import { Container } from "./menuButton.styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  image: string;
  title: string;
};

export function MenuButton({ image, title, ...rest }: ButtonProps) {
  return (
    <Container>
      <img src={image} alt={title} />
    </Container>
  );
}
