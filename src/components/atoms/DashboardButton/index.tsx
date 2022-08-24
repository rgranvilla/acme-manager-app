import { ButtonHTMLAttributes, ReactNode } from "react";

import { Container } from "./dashboardButton.styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  image: string;
  title: string;
};

export function DashboardButton({ image, title, ...rest }: ButtonProps) {
  return (
    <Container>
      <img src={image} alt={title} />
      <p>{title}</p>
    </Container>
  );
}
