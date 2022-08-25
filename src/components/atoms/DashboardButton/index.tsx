import { ButtonHTMLAttributes, ReactNode } from "react";

import { Container } from "./dashboardButton.styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  image: string;
  title: string;
  callback?: () => void;
};

export function DashboardButton({
  image,
  title,
  callback,
  ...rest
}: ButtonProps) {
  return (
    <Container onClick={callback}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </Container>
  );
}
