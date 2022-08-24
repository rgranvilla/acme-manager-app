import styled from "styled-components";
import { shade } from "polished";
import { palette } from "../../../styles/palette";

export const Container = styled.button`
  background: var(--bg_button);
  color: var(--white);

  width: 4rem;
  height: 4rem;

  border: 0;
  border-radius: 0.375rem;

  transition: background-color 0.2s;

  box-shadow: 0.125rem 0.125rem 0.5rem rgba(0, 0, 0, 0.25);

  img {
    height: 100%;
    padding: 0.5rem;
    object-fit: cover;
  }

  &:hover {
    background: ${shade(0.05, palette.BG_BUTTON)};
  }
`;
