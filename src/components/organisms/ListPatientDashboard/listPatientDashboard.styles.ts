import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  background: var(--bg_primary);
`;

export const TableContainer = styled.div`
  margin: 2rem;
  height: 68rem;
  width: auto;
`;

export const TablePreHeader = styled.div`
  display: flex;
  justify-content: end;

  height: 3rem;
`;

export const TableBody = styled.div`
  display: flex;

  height: calc(100% - 6rem);

  background: #dddddd;
`;

export const TableFooter = styled.div`
  display: flex;
  justify-content: center;

  height: 3rem;

  background: #bcbcbc;
`;
