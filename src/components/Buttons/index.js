import React from 'react'

import * as S from './styles'

const Button = ({titleButton, nameFunction, background, width, fontSize, height}) => {
    return (
        <S.Button
            onClick={nameFunction}
            background={background}
            width={width}
            fontSize={fontSize}
            height={height}

        >
            {titleButton}
        </S.Button>
    );
}

export default Button