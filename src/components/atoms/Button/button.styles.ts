import styled, { css } from "styled-components";
import { shade } from "polished";
import { palette } from "../../../styles/palette";

interface ButtonProps {
  hasIcon?: boolean;
  invertedColor?: boolean;
}

export const Container = styled.button<ButtonProps>`
  display: flex;
  align-items: center;

  ${(props) =>
    props.invertedColor
      ? css`
          background: var(--white);
          color: var(--bg_button);
        `
      : css`
          background: var(--bg_button);
          color: var(--white);
        `}

  height: 3rem;
  width: 8.3125rem;

  border: 0;
  border-radius: 0.375rem;

  transition: background-color 0.2s;

  box-shadow: 0.125rem 0.125rem 0.5rem rgba(0, 0, 0, 0.25);

  p {
    margin-left: 1.125rem;
    font-size: 1.5rem;
  }

  img:first-child {
    margin-left: 0.125rem;
    height: 2rem;
  }
  img:last-child {
    margin-right: 0.125rem;
    height: 2rem;
  }

  ${(props) =>
    props.invertedColor
      ? css`
          &:hover {
            background: ${shade(0.05, palette.WHITE)};
          }
        `
      : css`
          &:hover {
            background: ${shade(0.05, palette.BG_BUTTON)};
          }
        `}

  ${(props) =>
    !props.hasIcon &&
    css`
      p {
        margin-left: 0;
        width: 100 %;
      }
      justify-content: center;
    `}
`;
