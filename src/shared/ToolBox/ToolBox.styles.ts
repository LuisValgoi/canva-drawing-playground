import styled from "@emotion/styled";
import TooltipRC from "rc-tooltip";

export const ToolBoxArea = styled.div<{ $rows: number }>`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: ${(props) => `repeat(${props.$rows}, auto)`};
  background-color: white;
  gap: 0.25rem;
  border-radius: 1rem;
  place-items: center;
  padding: 1rem;
  position: relative;
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
  color: ${(props) => (props.$selected ? "#4243d4" : "202020")};

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

export const Tooltip = styled(TooltipRC)``;

export const TooltipContent = styled.div`
  transform: translateX(-10px);

  border-radius: 2rem;
  padding: 1rem;
  background-color: white;
  box-shadow: 4px 7px 18px -6px rgb(57 63 120);
  display: flex;
  gap: 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TooltipContentLineWidthOption = styled.div<{
  $width: number;
  $selected: boolean;
}>`
  height: ${(props) => `${props.$width}px`};
  width: ${(props) => `${props.$width}px`};
  background-color: #202020;
  border-radius: 100%;
  transform: scale(1.2);
  content: " ";
  cursor: pointer;

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
