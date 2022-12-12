import styled from "@emotion/styled";

export const ColorArea = styled.div<{ $rows: number }>`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: ${(props) => `repeat(${props.$rows / 3}, auto)`};
  background-color: white;
  border-radius: 1rem;
  place-items: center;
  padding: 1rem;
`;

export const ColorItem = styled.div<{
  $backgroundColor?: string;
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
  background-color: ${(props) => props.$backgroundColor ?? "blue"};
  border: ${(props) =>
    props.$backgroundColor?.toLocaleUpperCase() === "#FFFFFF"
      ? "1px solid lightgray"
      : "none"};

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
