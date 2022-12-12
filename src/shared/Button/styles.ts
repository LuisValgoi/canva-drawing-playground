import styled from "@emotion/styled";

const ButtonBase = styled.button`
  border: 0;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    outline-style: solid;
    outline-color: #d6e6ff;
    outline-offset: 0.15rem;
  }

  &:active {
    outline-style: solid;
    outline-color: #4243d4;
    outline-offset: 0.15rem;
  }
`;

export const ButtonDefault = styled(ButtonBase)`
  border-radius: 100%;
  background-color: white;
  padding: 1rem;
  max-width: 45px;
  max-height: 45px;
`;

export const ButtonPrimary = styled(ButtonBase)`
  border-radius: 3rem;
  background: linear-gradient(136.2deg, #8a4ae3 8.43%, #4852b1 95.68%);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  color: white;
  gap: 1rem;
`;
