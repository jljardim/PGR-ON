import React from 'react'

import * as S from './styles'

const Button = ({titleButton, nameFunction, background, width,
     fontSize, height, fontWeight, borderRadius, borderColor}) => {
    return (
        <S.Button
            onClick={nameFunction}
            background={background}
            width={width}
            height={height}
            fontSize={fontSize}
            fontWeight={fontWeight}
            borderRadius={borderRadius}
            borderColor={borderColor}
        >
            {titleButton}
        </S.Button>
    );
}

export default Button