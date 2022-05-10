import react from "react";

import * as S from './styles'

const Header2 =({h1Content, h2Content}) => {
    return (
        <S.HeaderWraper>
            <S.Titulo>{h1Content}</S.Titulo>
            <S.SubTitulo>{h2Content}</S.SubTitulo>
        </S.HeaderWraper>
        
    );
}

export default Header2