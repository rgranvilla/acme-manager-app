import styled from "styled-components";
import { shade } from "polished";
import { palette } from "../../../styles/palette";

export const Container = styled.button`
  display: flex;
  align-items: center;

  background: var(--bg_button);
  color: var(--white);

  height: 3rem;
  width: 8.3125rem;

  border: 0;
  border-radius: 0.375rem;

  transition: background-color 0.2s;

  box-shadow: 0.125rem 0.125rem 0.5rem rgba(0, 0, 0, 0.25);

  p {
    margin-left: 1rem;
    font-size: 1.5rem;
  }

  img {
    height: 2rem;
    object-fit: cover;
  }

  &:hover {
    background: ${shade(0.05, palette.BG_BUTTON)};
  }
`;
