import { Container } from "./iconButton.styles";

interface IconButtonProps {
  icon: string;
  title: string;
  leftIcon?: boolean;
  rightIcon?: boolean;
}

export function IconButton({
  icon,
  title,
  leftIcon,
  rightIcon,
}: IconButtonProps) {
  return (
    <Container>
      {leftIcon && <img src={icon} alt={title} />}
      <p>{title}</p>
      {rightIcon && <img src={icon} alt={title} />}
    </Container>
  );
}
