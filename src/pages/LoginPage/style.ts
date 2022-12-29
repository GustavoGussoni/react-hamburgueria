import styled from "styled-components";

export const DivLogin = styled.div`
  display: flex;
  flex-direction: column-reverse;

  align-items: center;
  gap: 14px;
  padding: 30px 13px;

  @media (min-width: 800px) {
    flex-direction: row;
    gap: 50px;
    height: 100vh;
  }
`;
