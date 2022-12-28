import styled from "styled-components";

export const DivHead = styled.div`
  min-width: 320px;
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 19px;
  padding: 23px 15px;
  background: var(--gray0);

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DivLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  gap: 7px;
`;

export const DivBtts = styled.div`
  display: flex;
  flex-direction: row;
  gap: 23px;
  width: 100%;
  max-width: 480px;

  .divBttCart {
    position: relative;

    p {
      width: 20px;
      height: 24px;
      background: var(--green-primary);
      border-radius: 7px;
      position: absolute;
      right: -11px;
      top: -13px;
      font-weight: 600;
      font-size: 14px;
      line-height: 0px;
      color: var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .cartBtt {
    color: var(--gray4);
    height: 25px;
    width: 25px;

    :hover {
      color: var(--gray100);
    }
  }
  .logOutBtt {
    color: var(--gray4);
    height: 25px;
    width: 25px;

    :hover {
      color: var(--gray100);
    }
  }
`;

export const Form = styled.form`
  position: relative;
  width: 100%;
  max-width: 365px;
`;

export const ButtonHead = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0px 0.85rem;
  border: 2px solid var(--green-primary);
  background: var(--green-primary);
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: var(--white);
  position: absolute;
  right: 8px;
  top: 10px;
  :hover {
    border: 2px solid var(--green-50);
    background: var(--green-50);
  }
`;

export const InputDefault = styled.input`
  width: 100%;
  max-width: 365px;
  height: 60px;
  background: var(--white);
  border: 2px solid var(--gray20);
  border-radius: 8px;
  padding: 0 0.9375rem;

  ::placeholder {
    color: var(--gray20);
  }
`;
