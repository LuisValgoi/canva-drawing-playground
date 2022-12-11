import React from "react";

import { GrRevert } from "react-icons/gr";
import { FiTrash2, FiDownload } from "react-icons/fi";

import logo from "@/assets/logo.svg";

const Header: React.FC = () => {
  const styles: Record<
    "header" | "button" | "buttonArea" | "buttonPrimary",
    React.CSSProperties
  > = {
    header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "2rem",
    },
    buttonArea: {
      display: "flex",
      flexDirection: "row",
      gap: "1rem",
    },
    button: {
      borderRadius: "100%",
      backgroundColor: "white",
      padding: "1rem",
      margin: "0 auto",
      maxWidth: "45px",
      maxHeight: "45px",
      border: "0",
    },
    buttonPrimary: {
      borderRadius: "3rem",
      backgroundColor: "#4243d4",
      padding: "1rem 2rem",
      margin: "0 auto",
      border: "0",
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      gap: '1rem'
    },
  };
  return (
    <header style={styles.header}>
      <img alt="logo" src={logo} />
      <div style={styles.buttonArea}>
        <button style={styles.button}>
          <GrRevert />
        </button>
        <button style={styles.button}>
          <FiTrash2 />
        </button>
        <button style={styles.buttonPrimary}>
          <FiDownload />
          Baixar Imagem
        </button>
      </div>
    </header>
  );
};

export default Header;
