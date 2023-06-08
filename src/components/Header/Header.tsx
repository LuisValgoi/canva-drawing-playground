import React from "react";

import { ButtonDefault, ButtonPrimary } from "../../shared/Button/Button";

import { GrRevert } from "react-icons/gr";
import { FiTrash2, FiDownload } from "react-icons/fi";
import logo from "../../assets/logo.svg";

import * as S from "./styles";

const Header: React.FC = () => {
  return (
    <S.Header>
      <S.Logo alt="logo" src={logo} tabIndex={0} />
      <S.ButtonArea>
        <ButtonDefault>
          <GrRevert />
        </ButtonDefault>
        <ButtonDefault>
          <FiTrash2 />
        </ButtonDefault>
        <ButtonPrimary>
          <FiDownload />
          Baixar Imagem
        </ButtonPrimary>
      </S.ButtonArea>
    </S.Header>
  );
};
export default Header;
