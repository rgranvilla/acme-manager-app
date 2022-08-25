import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  padding: 0 2rem;
`;

export const HorizontalDivider = styled.div`
  background: var(--border_primary);
  width: 100%;
  height: 2px;

  margin: 2rem 0;
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
`;
