import { useState } from "react";
import { ITool } from "./interfaces";

function useToolBox() {
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
    selectedTool,
    setSelectedTool,
    setSelectedLineWidth,
  };
}

export default useToolBox