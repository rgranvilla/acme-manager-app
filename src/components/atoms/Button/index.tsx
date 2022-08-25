import { ButtonHTMLAttributes } from "react";

import { Container } from "./button.styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  label: string;
  leftIcon?: boolean;
  rightIcon?: boolean;
  invertedColor?: boolean;
  callback?: () => void;
}

export function Button({
  icon,
  label,
  leftIcon,
  rightIcon,
  invertedColor,
  callback,
}: ButtonProps) {
  return (
    <Container
      hasIcon={!!icon}
      invertedColor={invertedColor}
      onClick={callback}
    >
      {icon && leftIcon && <img src={icon} alt={label} />}
      <p>{label}</p>
      {icon && rightIcon && <img src={icon} alt={label} />}
    </Container>
  );
}
