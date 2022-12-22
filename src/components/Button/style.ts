import styled, { css } from "styled-components";

interface iFontColor {
  fontColor?: string;
  colorBg?: string;
  fontColorHover?: string;
}

interface iButtonSize {
  buttonSize: string;
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

export const ThemeButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${(props: iButtonSize) => {
    switch (props.buttonSize) {
      case "lg":
        return css`
          height: 60px;
          width: 343px;
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
        `;
      case "sm":
        return css`
          height: 40px;
          width: 107px;
          padding: 0px 1.25rem;
          border: 2px solid var(--green-primary);
          background: var(--green-primary);
          border-radius: 8px;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          color: var(--white);
          :hover {
            border: 2px solid var(--green-50);
            background: var(--green-50);
          }
        `;

      default:
        return false;
    }
  }}
`;
