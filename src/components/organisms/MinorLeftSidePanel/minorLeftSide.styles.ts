import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const Container = styled.div`
  height: 100vh;
  max-width: 7rem;

  z-index: 10;
  box-shadow: 0.375rem 0.375rem 1rem rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: var(--bg_secondary);
`;

export const ButtonsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  margin: 0 1.75rem;

  button:first-child {
    position: absolute;

    top: -6rem;
  }
`;

export const ImageContainer = styled.div`
  margin-left: 1rem;

  height: 32rem;

  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 18rem;
`;
