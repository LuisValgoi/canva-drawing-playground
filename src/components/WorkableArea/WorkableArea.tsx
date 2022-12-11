import React, { CSSProperties } from "react";

import Canvas from "@/components/Canvas/Canvas";
import Aside from "@/components/Aside/Aside";

const WorkableArea: React.FC = () => {
  const styles: Record<"area" | "aside" | "canvas", CSSProperties> = {
    area: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "1rem",
      flexDirection: "row",
      width: "1000px",
      height: `487px`,
      margin: "0 auto",
      marginTop: "3rem",
    },
    canvas: {
      position: "relative",
      backgroundColor: "white",
      borderRadius: "1rem",
      flex: 10,
      height: "100%",
    },
    aside: {
      position: "relative",
      flex: 2,
      height: "100%",
    },
  };

  return (
    <div style={styles.area}>
      <main style={styles.canvas}>
        <Canvas />
      </main>
      <aside style={styles.aside}>
        <Aside />
      </aside>
    </div>
  );
};

export default WorkableArea;
