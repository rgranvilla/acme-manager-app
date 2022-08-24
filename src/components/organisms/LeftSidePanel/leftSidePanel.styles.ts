import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const Container = styled.div`
  height: 100vh;
  max-width: 30rem;

  z-index: 10;
  box-shadow: 0.375rem 0.375rem 1rem rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: var(--bg_secondary);
`;

export const LogoContainer = styled.div`
  margin: 2rem;

  height: 8.125rem;

  img {
    height: 100%;

    object-fit: fill;
  }
`;

export const ImageContainer = styled.div`
  margin-left: 1rem;

  height: 32rem;

  img {
    height: 100%;
    object-fit: fill;
  }
`;
