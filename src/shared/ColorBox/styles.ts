import styled from "@emotion/styled";

export const ColorArea = styled.div<{ $rows: number }>`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: ${(props) => `repeat(${props.$rows}, auto)`};
  background-color: white;
  border-radius: 1rem;
  place-items: center;
  padding: 1rem;
`;

export const ColorItem = styled.div<{
  $backgroundColor: string;
  $selected: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  margin: 0.25rem;

  border-radius: 100%;
  border: unset;
  cursor: pointer;

  height: 10px;
  width: 10px;
  background-color: ${(props) => props.$backgroundColor};
  border: ${(props) =>
    props.$backgroundColor?.toLocaleUpperCase() === "#FFFFFF"
      ? "1px solid lightgray"
      : "none"};

  outline-color: ${(props) => (props.$selected ? "#4243d4" : "white")};
  outline-width: 0.15rem;
  outline-offset: 0.15rem;
  outline-style: solid;

  &:hover {
    outline-color: ${(props) => (props.$selected ? "#4243d4" : "#d6e6ff")};
  }

  &:active,
  &:focus {
    outline-color: #4243d4;
  }
`;
