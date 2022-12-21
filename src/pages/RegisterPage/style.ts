import styled from "styled-components";

export const DivReg = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  gap: 14px;

  @media (min-width: 800px) {
    flex-direction: row;
    gap: 50px;
  }
`;
