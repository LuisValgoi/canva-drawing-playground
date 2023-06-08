import React, { useState } from "react";

import { triggerByKeyboard } from "../../utils/handlers";

import * as S from "./styles";

const SUPPORTED_COLORS = [
  {
    key: "#000000",
  },
  {
    key: "#6D7278",
  },
  {
    key: "#B620E0",
  },
  {
    key: "#6236FF",
  },
  {
    key: "#0091FF",
  },
  {
    key: "#32C5FF",
  },
  {
    key: "#6DD400",
  },
  {
    key: "#F7B500",
  },
  {
    key: "#FA6400",
  },
  {
    key: "#E02020",
  },
  {
    key: "#FFFFFF",
  },
];

const ColorBox: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState(SUPPORTED_COLORS[0].key);

  return (
    <S.ColorArea $rows={SUPPORTED_COLORS.length / 3}>
      {SUPPORTED_COLORS.map((color) => (
        <S.ColorItem
          key={color.key}
          $backgroundColor={color.key}
          $selected={color.key === selectedColor}
          onClick={() => setSelectedColor(color.key)}
          onKeyUp={(e) => triggerByKeyboard(e, () => setSelectedColor(color.key))}
          tabIndex={0}
        />
      ))}
    </S.ColorArea>
  );
};

export default ColorBox;
