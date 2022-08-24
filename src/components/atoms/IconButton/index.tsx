import { Link } from "react-router-dom";

import { Container } from "./iconButton.styles";

interface IconButtonProps {
  icon: string;
  title: string;
  leftIcon?: boolean;
  rightIcon?: boolean;
  link: string;
}

export function IconButton({
  icon,
  title,
  leftIcon,
  rightIcon,
  link,
}: IconButtonProps) {
  return (
    <Link to={link}>
      <Container>
        {leftIcon && <img src={icon} alt={title} />}
        <p>{title}</p>
        {rightIcon && <img src={icon} alt={title} />}
      </Container>
    </Link>
  );
}
