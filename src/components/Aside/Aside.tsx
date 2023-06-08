import React from "react";

import ToolBox from '../../shared/ToolBox/ToolBox';
import ColorBox from "../../shared/ColorBox/ColorBox";

import * as S from "./styles";

const Aside: React.FC = () => {
  return (
    <S.AsideArea>
      <ToolBox />
      <ColorBox />
    </S.AsideArea>
  );
};

export default Aside;
