import { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";

import { Container } from "./menuButton.styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  image: string;
  title: string;
  link: string;
};

export function MenuButton({ image, title, link, ...rest }: ButtonProps) {
  return (
    <Container>
      <Link to={link}>
        <img src={image} alt={title} />
      </Link>
    </Container>
  );
}
