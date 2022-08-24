import styled from "styled-components";
import { shade } from "polished";
import { palette } from "../../../styles/palette";

export const Container = styled.button`
  background: var(--bg_secondary);
  color: var(--white);

  border: 0;
  border-radius: 0.375rem;

  font-weight: 700;

  width: 12rem;

  transition: background-color 0.2s;

  box-shadow: 0.375rem 0.375rem 1rem rgba(0, 0, 0, 0.25);

  p {
    font-size: 1.25rem;
    padding: 0.25rem 0 1rem;
  }

  img {
    width: 10rem;
    padding: 1.5rem;
    padding-bottom: 0;
    object-fit: cover;
  }

  &:hover {
    background: ${shade(0.05, palette.BG_SECONDARY)};
  }
`;
