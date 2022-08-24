import { ButtonHTMLAttributes, ReactNode } from "react";

import { Container } from "./logomark.styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  image: string;
  title: string;
};

export function Logomark({ image, title, ...rest }: ButtonProps) {
  return (
    <Container>
      <img src={image} alt={title} />
    </Container>
  );
}
