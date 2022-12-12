import React from "react";

import * as S from "./styles";

export const ButtonDefault: React.FC<JSX.IntrinsicElements["button"]> = (
  props
) => {
  return <S.ButtonDefault {...props} />;
};

export const ButtonPrimary: React.FC<JSX.IntrinsicElements["button"]> = (
  props
) => {
  return <S.ButtonPrimary {...props} />;
};
