/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled, { css } from "styled-components";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  hasIcon: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;

  label {
    padding-right: 1rem;
  }
`;

export const InputContainer = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  background: var(--bg_primary);

  height: 2rem;
  width: 15rem;

  border: 0.2rem solid var(--border_primary);
  border-radius: 0.3125rem;

  svg {
    color: var(--border_primary);
  }

  input {
    padding-left: 1rem;
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
`;

export const InputIcon = styled.div`
  display: flex;

  width: 2rem;
`;

export const InputField = styled.div`
display: flex;
align - items: center;

height: 100 %;
width: 100 %;
`;
