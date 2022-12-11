import React, { CSSProperties } from "react";

import { BsSquare } from "react-icons/bs";

const Aside: React.FC = () => {
  const styles: Record<
    "aside" | "toolbox" | "colorBox" | "item",
    CSSProperties | any
  > = {
    aside: {
      display: "grid",
      gridTemplateColumns: "auto",
      gridTemplateRows: "auto",
      gap: "1rem",
      width: "100%",
      height: "100%",
    },
    toolbox: {
      display: "grid",
      gridTemplateColumns: "auto auto",
      gridTemplateRows: "auto auto auto auto auto",
      backgroundColor: "white",
      gap: "0.25rem",
      borderRadius: "1rem",
    },
    colorBox: {
      display: "grid",
      gridTemplateColumns: "auto auto auto",
      gridTemplateRows: "auto auto auto auto",
      backgroundColor: "white",
      gap: "0",
      borderRadius: "1rem",
    },
    item: {
      padding: "1rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: 0,
    },
  };

  return (
    <div style={styles.aside}>
      <div style={styles.toolbox}>
        <p style={styles.item}>
          <BsSquare />
        </p>
        <p style={styles.item}>1</p>
        <p style={styles.item}>1</p>
        <p style={styles.item}>1</p>
        <p style={styles.item}>1</p>
        <p style={styles.item}>1</p>
        <p style={styles.item}>1</p>
        <p style={styles.item}>1</p>
        <p style={styles.item}>1</p>
        <p style={styles.item}>1</p>
      </div>
      <div style={styles.colorBox}>
        <p style={styles.item}>1</p>
        <p style={styles.item}>1</p>
        <p style={styles.item}>1</p>
        <p style={styles.item}>1</p>
        <p style={styles.item}>1</p>
        <p style={styles.item}>1</p>
        <p style={styles.item}>1</p>
        <p style={styles.item}>1</p>
        <p style={styles.item}>1</p>
        <p style={styles.item}>1</p>
        <p style={styles.item}>1</p>
        <p style={styles.item}>1</p>
      </div>
    </div>
  );
};

export default Aside;
