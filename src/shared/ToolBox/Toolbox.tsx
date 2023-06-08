import React from "react";
import useToolBox from "./useToolBox";
import { tools } from "./Tools";
import * as S from "./styles";
import { triggerByKeyboard } from "../../utils/handlers";

const ToolBox: React.FC = () => {
  // prettier-ignore
  const { selectedTool, setSelectedTool, setSelectedLineWidth } = useToolBox();

  return (
    <S.ToolBoxArea $rows={tools.length / 2}>
      {tools.map((tool, index) => (
        <S.Tooltip
          key={tool.key}
          placement="left"
          trigger={["click"]}
          destroyTooltipOnHide
          overlayStyle={{ width: "fit-content" }}
          overlay={
            !tool.lineWidthOptions ? (
              <React.Fragment />
            ) : (
              <S.TooltipContent>
                {tool.lineWidthOptions?.map((option) => (
                    <S.TooltipContentLineWidthOption
                      key={option.width}
                      $selected={option.width === tool.lineWidthSelected}
                      $width={option.width}
                      onClick={() => setSelectedLineWidth(tool, option.width)}
                    />
                  )
                )}
              </S.TooltipContent>
            )
          }
        >
          <S.ToolBoxItem
            ref={tool.ref}
            tabIndex={0}
            onClick={() => setSelectedTool(tool)}
            onKeyUp={(e) => triggerByKeyboard(e, () => setSelectedTool(tool))}
            $selected={
              selectedTool === undefined
                ? index === 0
                : tool.key === selectedTool?.key
            }
          >
            {tool.icon}
          </S.ToolBoxItem>
        </S.Tooltip>
      ))}
    </S.ToolBoxArea>
  );
};

export default ToolBox;
