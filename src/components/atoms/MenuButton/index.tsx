import { ButtonHTMLAttributes } from "react";

import { Container } from "./menuButton.styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  image: string;
  title: string;
  callback: () => void;
};

export function MenuButton({ image, title, callback, ...rest }: ButtonProps) {
  return (
    <Container onClick={callback}>
      <img src={image} alt={title} />
    </Container>
  );
}
