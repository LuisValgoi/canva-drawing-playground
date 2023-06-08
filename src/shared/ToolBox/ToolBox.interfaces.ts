import { RefObject } from "react";

export interface ILineWidthOption {
  key: string;
  width: number;
}

export interface ITool {
  ref: RefObject<HTMLButtonElement>;
  key: string;
  icon: JSX.Element;
  lineWidthOptions?: ILineWidthOption[];
  lineWidthSelected?: number;
}
