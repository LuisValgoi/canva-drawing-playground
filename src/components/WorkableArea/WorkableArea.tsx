import React from "react";

import Canvas from "@/components/Canvas/Canvas";
import Aside from "@/components/Aside/Aside";

import * as S from "./styles";

const WorkableArea: React.FC = () => {
  return (
    <S.Area>
      <S.CanvasArea>
        <Canvas />
      </S.CanvasArea>
      <S.AsideArea>
        <Aside />
      </S.AsideArea>
    </S.Area>
  );
};

export default WorkableArea;
