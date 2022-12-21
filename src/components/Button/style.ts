import styled from "styled-components";

interface iFontColor {
  fontColor?: string;
  colorBg?: string;
  fontColorHover?: string;
}

export const BttPrimary = styled.button`
  height: 60px;
  border-radius: 8px;
  border: none;
  background: var(${(props) => props.color});
  color: var(${(props: iFontColor) => props.fontColor});
  width: 100%;

  :hover {
    background: var(${(props: iFontColor) => props.colorBg});
    color: var(${(props: iFontColor) => props.fontColorHover});
  }
  .spinner-icon {
    animation: spin infinite 5s linear;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
