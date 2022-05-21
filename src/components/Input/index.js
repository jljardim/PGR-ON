import * as S from './styles'

const Input = ({label, placeHolder, valueOnChange, typeInput, width, height, display,
    flexDirection, wrap, fontSize, fontWeight, marginBottom, borderRadius, padding, border, onKeyCapture }) => {
    return(
        <S.ContanierWraper
        width={width}
        display={display}
        flexDirection={flexDirection}
        wrap={wrap}
        >
        <S.LabelWraper
          width={width}
          fontWeight={fontWeight}
          fontSize={fontSize}
          marginBottom={marginBottom}
        >{label}
        </S.LabelWraper>
        <S.InputWraper
          placeholder={placeHolder}
          required
          onChange={valueOnChange}
          type={typeInput}
          width={width}
          height={height}
          borderRadius={borderRadius}
          padding={padding}
          border={border}
          onKeyUpCapture={onKeyCapture}
        />
        </S.ContanierWraper>
    );
}

export default Input