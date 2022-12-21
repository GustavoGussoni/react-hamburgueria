import styled from "styled-components";

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 13px 14px;
  width: 100%;
  max-width: 500px;
  background: var(--white);
  border: 2px solid var(--gray0);
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  span {
    color: var(--negative);
  }

  input {
    height: 60px;
    background: var(--white);
    border: 2px solid var(--gray100);
    border-radius: 8px;
    padding: 21px 15px;
    position: relative;
    z-index: 0;
  }

  h2 {
    align-self: flex-start;
  }

  .divHeadReg {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    a {
      font-weight: 500;
      font-size: 14px;
      line-height: 22px;
      color: var(--gray50);
    }
  }
`;
