/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled, { css } from "styled-components";

interface Props {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  hasIcon: boolean;
  fullWidth: boolean;
}

interface IconInputProps {
  hasIcon: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  label {
    position: absolute;
    left: 0;
  }
`;

export const InputContainer = styled.div<Props>`
  display: flex;
  align-items: center;

  background: var(--bg_primary);

  height: 2.5rem;
  width: 18vw;

  margin-left: 6rem;

  border: 0.2rem solid var(--border_primary);
  border-radius: 0.3125rem;

  svg {
    color: var(--border_primary);
  }

  input {
    padding-left: 1rem;
    height: 80%;
    width: 100%;
    border: 0;
    background: none;
  }

  input:focus-visible {
    outline: 0;
  }

  ${(props) =>
    props.hasIcon &&
    css`
      input {
        padding-left: 0;
      }
    `}

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: var(--border_active);

      input {
        font-weight: 600;
        color: var(--border_active);
      }

      svg {
        color: var(--border_active);
      }
    `}

    ${(props) =>
    props.isFilled &&
    css`
      border-color: var(--border_primary);

      input {
        font-weight: 600;
        color: var(--border_primary);
      }

      svg {
        color: var(--border_primary);
      }
    `}

    ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;

export const InputIcon = styled.div<IconInputProps>`
  display: flex;

  width: 2rem;

  ${(props) =>
    !props.hasIcon &&
    css`
      & {
        display: none;
      }
    `}
`;
