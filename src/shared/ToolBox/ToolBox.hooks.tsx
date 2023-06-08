import React, { useState } from "react";
import { ILineWidthOption, ITool } from "./ToolBox.interfaces";

import { BiSquareRounded, BiCircle, BiStar, BiText } from "react-icons/bi";
import { FiTriangle } from "react-icons/fi";
import { CgBorderStyleSolid } from "react-icons/cg";
import { FaEraser } from "react-icons/fa";
import { ImPencil } from "react-icons/im";
import { IoIosBrush } from "react-icons/io";
import { RiPaintFill } from "react-icons/ri";

const lineWidthOptions: ILineWidthOption[] = [
  {
    key: "thin",
    width: 2,
  },
  {
    key: "fine",
    width: 4,
  },
  {
    key: "normal",
    width: 6,
  },
  {
    key: "thick",
    width: 8,
  },
  {
    key: "super-thick",
    width: 10,
  },
];

const tools: ITool[] = [
  {
    ref: React.createRef<HTMLButtonElement>(),
    key: "rectangle",
    icon: <BiSquareRounded />,
    lineWidthOptions: lineWidthOptions,
    lineWidthSelected: 2,
  },
  {
    ref: React.createRef<HTMLButtonElement>(),
    key: "circle",
    icon: <BiCircle />,
    lineWidthOptions: lineWidthOptions,
    lineWidthSelected: 2,
  },
  {
    ref: React.createRef<HTMLButtonElement>(),
    key: "triangule",
    icon: <FiTriangle />,
    lineWidthOptions: lineWidthOptions,
    lineWidthSelected: 2,
  },
  {
    ref: React.createRef<HTMLButtonElement>(),
    key: "line",
    icon: <CgBorderStyleSolid />,
    lineWidthOptions: lineWidthOptions,
    lineWidthSelected: 2,
  },
  {
    ref: React.createRef<HTMLButtonElement>(),
    key: "star",
    icon: <BiStar />,
    lineWidthOptions: lineWidthOptions,
    lineWidthSelected: 2,
  },
  {
    ref: React.createRef<HTMLButtonElement>(),
    key: "text",
    icon: <BiText />,
    lineWidthOptions: lineWidthOptions,
    lineWidthSelected: 2,
  },
  {
    ref: React.createRef<HTMLButtonElement>(),
    key: "eraser",
    icon: <FaEraser />,
    lineWidthOptions: lineWidthOptions,
    lineWidthSelected: 2,
  },
  {
    ref: React.createRef<HTMLButtonElement>(),
    key: "paint-bucket",
    icon: <RiPaintFill />,
  },
  {
    ref: React.createRef<HTMLButtonElement>(),
    key: "pencil",
    icon: <ImPencil />,
    lineWidthOptions: lineWidthOptions,
    lineWidthSelected: 2,
  },
  {
    ref: React.createRef<HTMLButtonElement>(),
    key: "brush",
    icon: <IoIosBrush />,
    lineWidthOptions: lineWidthOptions,
    lineWidthSelected: 2,
  },
];

export function useToolBox() {
  const [selectedTool, setSelectedTool] = useState<undefined | ITool>(
    undefined
  );

  const setSelectedLineWidth = (
    selectedTool: ITool,
    selectedLineWidth: number
  ) => {
    const newSelectedTool = {
      ...selectedTool,
      lineWidthSelected: selectedLineWidth,
    };
    setSelectedTool(newSelectedTool);
  };

  return {
    tools,
    selectedTool,
    setSelectedTool,
    setSelectedLineWidth,
  };
}
