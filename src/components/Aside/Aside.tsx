import React from "react";

import Toolbox from "@/shared/ToolBox/Toolbox";
import ColorBox from "@/shared/ColorBox/ColorBox";

import * as S from "./styles";

const Aside: React.FC = () => {
  return (
    <S.AsideArea>
      <Toolbox />
      <ColorBox />
    </S.AsideArea>
  );
};

export default Aside;
