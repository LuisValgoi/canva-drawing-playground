import React, { useState } from "react";

import { BiSquareRounded, BiCircle, BiStar, BiText } from "react-icons/bi";
import { FiTriangle } from "react-icons/fi";
import { CgBorderStyleSolid } from "react-icons/cg";
import { FaEraser } from "react-icons/fa";
import { ImPencil } from "react-icons/im";
import { IoIosBrush } from "react-icons/io";
import { RiPaintFill } from "react-icons/ri";

import { triggerByKeyboard } from "@/utils/handlers";

import * as S from "./styles";

const SUPPORTED_TOOLS = [
  {
    key: "rectangle",
    icon: <BiSquareRounded />,
  },
  {
    key: "circle",
    icon: <BiCircle />,
  },
  {
    key: "triangule",
    icon: <FiTriangle />,
  },
  {
    key: "line",
    icon: <CgBorderStyleSolid />,
  },
  {
    key: "star",
    icon: <BiStar />,
  },
  {
    key: "text",
    icon: <BiText />,
  },
  {
    key: "eraser",
    icon: <FaEraser />,
  },
  {
    key: "paint-bucket",
    icon: <RiPaintFill />,
  },
  {
    key: "pencil",
    icon: <ImPencil />,
  },
  {
    key: "brush",
    icon: <IoIosBrush />,
  },
];

const ToolBox: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState(SUPPORTED_TOOLS[0].key);

  return (
    <S.ToolBoxArea $rows={SUPPORTED_TOOLS.length / 2}>
      {SUPPORTED_TOOLS.map((tool) => (
        <S.ToolBoxItem
          key={tool.key}
          $selected={tool.key === selectedTool}
          onClick={() => setSelectedTool(tool.key)}
          onKeyUp={(e) => triggerByKeyboard(e, () => setSelectedTool(tool.key))}
          tabIndex={0}
        >
          {tool.icon}
        </S.ToolBoxItem>
      ))}
    </S.ToolBoxArea>
  );
};

export default ToolBox;
