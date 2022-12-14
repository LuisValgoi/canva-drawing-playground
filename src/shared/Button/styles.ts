import styled from "@emotion/styled";

const ButtonBase = styled.button`
  margin: 0 auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  gap: 1rem;
  background-color: #fff;

  &:hover {
  outline-style: solid;
    outline-color: #d6e6ff;
    outline-offset: 0.15rem;
    outline-width: 0.15rem;
  }

  &:focus-visible {
    outline-style: solid;
    outline-color: #4243d4;
    outline-offset: 0.15rem;
    outline-width: 0.15rem;
  }

  &:active {
    background-color: #f6faff;

    outline-style: solid;
    outline-color: #4243d4;
    outline-offset: 0.15rem;
    outline-width: 0.15rem;
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
  color: white;

  &:active {
    background: linear-gradient(136.2deg, #4852b1 8.43%, #8a4ae3 95.68%);
  }
`;
