import styled from "@emotion/styled";

export const Logo = styled.img`
  &:focus {
    outline-style: auto;
    outline-color: #4243d4;
    outline-width: 0.15rem;
    outline-offset: 0.15rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

export const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
