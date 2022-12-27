import styled from "styled-components";

export const DivModal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  background: rgba(51, 51, 51, 0.5);
`;
export const DivCart = styled.div`
  padding: 0 15px;
  width: 100%;
  max-width: 500px;
  max-height: 65vh;
`;

export const Image = styled.img`
  justify-content: center;
  align-items: center;
  height: 70px;
  object-fit: contain;
  width: 70px;
  background-color: var(--gray20);
  border-radius: 5px 5px 0 0;
`;

export const DivInfo = styled.div`
  width: 100%;
  height: 65px;
  background: var(--green-primary);
  border-radius: 5px 5px 0px 0px;
  padding: 22px 21px;
  flex-direction: row;
  justify-content: space-between;

  button {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.5);

    :hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;

export const DivMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 18px;
  gap: 15px;
`;

export const DivName = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  align-items: flex-start;
`;

export const List = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin-top: 20px;
  background: var(--gray0);
  border-radius: 5px;

  .divCards {
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    overflow: scroll;
  }

  @media (min-width: 800px) {
    margin-top: 32px;
  }
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  div + span {
    position: absolute;
    left: 82.13%;
    right: 0%;
    top: 21.75%;
    bottom: 72.5%;
    cursor: pointer;
  }
`;

export const DivNoItem = styled.div`
  align-items: center;
  padding: 50px 21px;
`;

export const DivTotal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 20px 20px;

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 100%;
    padding: 0px 1.25rem;
    border: 2px solid var(--gray20);
    background: var(--gray20);
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: var(--gray50);
    font-family: "Inter", sans-serif;
    :hover {
      border: 2px solid var(--gray50);
      background: var(--gray50);
      color: var(--gray20);
    }
  }
`;

export const DivTotalInfo = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 2px solid var(--gray20);
  width: 100%;
  justify-content: space-between;
  padding: 21px 0;
`;
