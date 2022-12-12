import styled from "@emotion/styled";

export const ToolBoxArea = styled.div<{ $rows: number }>`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: ${(props) => `repeat(${props.$rows / 2}, auto)`};
  background-color: white;
  gap: 0.25rem;
  border-radius: 1rem;
  place-items: center;
  padding: 1rem;
`;

export const ToolBoxItem = styled.button<{ $selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  margin: 0.5rem;
  transform: scale(1.2);

  border-radius: 0.25rem;
  border: unset;
  cursor: pointer;
  background-color: ${(props) => (props.$selected ? "#d6e6ff" : "unset")};
  color: ${(props) => (props.$selected ? "#4243d4" : "black")};

  outline-style: ${(props) => (props.$selected ? "solid" : "unset")};
  outline-color: ${(props) => (props.$selected ? "#4243d4" : "unset")};
  outline-offset: 0.15rem;

  &:hover {
    outline-style: ${(props) => (props.$selected ? "solid" : "solid")};
    outline-color: ${(props) => (props.$selected ? "#4243d4" : "#d6e6ff")};
    outline-offset: 0.15rem;
  }

  &:active,
  &:focus {
    outline-style: solid;
    outline-color: #4243d4;
    outline-offset: 0.15rem;
  }
`;
