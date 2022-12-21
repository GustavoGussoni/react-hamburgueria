import styled from "styled-components";

export const DivLogo = styled.div`
  justify-content: center;
  align-items: flex-start;
  gap: 22px;
  max-width: 500px;

  .logoName {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 5px;

    h2 {
      color: var(--red-secondary);
    }
  }

  .logoInfo {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #ffffff;
    padding: 13px 14px;
    border: 1px solid #e0e0e0;
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    gap: 19px;

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: var(--gray50);
      text-align: left;
    }
  }

  .divLogo {
    height: 60px;
    min-width: 60px;
    background: rgba(39, 174, 96, 0.1);
    border-radius: 5px;
    img {
      height: 24px;
      width: 24px;
      object-fit: cover;
    }
  }

  .imgBalls {
    display: none;
  }

  @media (min-width: 800px) {
    .imgBalls {
      display: flex;
      margin-top: 8px;
    }
  }
`;
