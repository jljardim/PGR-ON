import React from 'react'

import * as S from './styles'

const Button = ({titleButton, nameFunction}) => {
    return (
        <S.Button
            onClick={nameFunction}
        >
            {titleButton}
        </S.Button>
    );
}

export default Button