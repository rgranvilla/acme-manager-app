import { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

import { Container } from "./dashboardButton.styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  image: string;
  title: string;
  link: string;
};

export function DashboardButton({ image, title, link, ...rest }: ButtonProps) {
  return (
    <Link to={link}>
      <Container>
        <img src={image} alt={title} />
        <p>{title}</p>
      </Container>
    </Link>
  );
}
