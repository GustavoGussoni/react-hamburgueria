import styled from "styled-components";

export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: flex-start;
  padding: 0 20px;
`;

export const DivContainer = styled.div`
  min-width: 320px;
  max-width: 100%;
  width: 100%;
  align-items: center;

  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    overflow: hidden;
  }
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 346px;
  min-width: 300px;

  border-radius: 5px;
  border: 2px solid var(--gray20);

  div {
    width: -webkit-fill-available;
  }

  img {
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    height: 150px;
    object-fit: contain;
    width: 100%;
    background-color: var(--gray0);
    border-radius: 5px 5px 0 0;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin-top: 32px;
  gap: 20px;
  min-width: 320px;
  max-width: 1370px;
  width: 100%;
  overflow-x: scroll;
  align-items: center;
  padding: 0 15px;
  ::-webkit-scrollbar {
    height: 0px;
  }

  @media (min-width: 800px) {
    align-items: center;
    flex-wrap: wrap;
  }
`;
