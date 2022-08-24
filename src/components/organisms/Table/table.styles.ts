import { HtmlHTMLAttributes, TableHTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface CellProps {
  vert_Align?: "top" | "middle" | "bottom";
  hor_Align?: "left" | "right" | "center" | "justify" | "char";
  isBolded?: boolean;
  isInactivated?: boolean;
}

export const TABLE = styled.table`
  width: 100%;

  margin-bottom: 30%;

  border-collapse: collapse;
  & {
    tr:last-child {
      border-bottom: 2px solid var(--border_primary);
    }
  }
`;

export const THEAD = styled.thead`
  height: 3.375rem;
  color: var(--border_primary);
`;

export const TH = styled.th<CellProps>`
  padding: 0.25rem;

  vertical-align: ${(props) => props.vert_Align};
  text-align: ${(props) => props.hor_Align};
  ${(props) =>
    props.isBolded
      ? css`
          font-weight: 600;
        `
      : css`
          font-weight: 300;
        `};
`;

export const TR = styled.tr<CellProps>`
  ${(props) =>
    props.isInactivated &&
    css`
      & {
        color: #a1a1a1;
      }

      td:first-child {
        width: 4rem;
        color: var(--txt_primary);
      }
    `}

  height: 4.5rem;
  &:nth-child(2n + 1) {
    background: #d9d9d9;
  }

  &:nth-child(2n + 2) {
    background: #f0eaea;
  }

  &:last-child {
    border: 0 !important;
  }
`;

export const TD = styled.td<CellProps>`
  vertical-align: ${(props) => props.vert_Align};
  text-align: ${(props) => props.hor_Align};

  padding: 0.25rem;

  ${(props) =>
    props.isBolded
      ? css`
          font-weight: 600;
        `
      : css`
          font-weight: 300;
        `};
`;
