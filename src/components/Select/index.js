import * as S from './styles'

const Select = ({titleLabel, options, value, onChange, placeHolderName, placeHolderOption,
     fontSize, fontWeight, width, height, paddingTop, display, flexDirection}) => {
    return (
        <>
        <S.SelectWrap
        width={width}
        paddingTop={paddingTop}
        display={display}
        flexDirection={flexDirection}
        >
        <S.Label
        fontSize={fontSize}
        fontWeight={fontWeight}
        >
        {titleLabel}
        </S.Label>
        <S.Select 
         value={value}
         onChange={onChange}
         placeholder={placeHolderName}
         width={width}
         height={height}
         >
         <S.Option 
          value="" disabled selected 
         >
          {placeHolderOption}
         </S.Option>
          {options.map((option) => (
         <>
         <S.Option 
           key={option.value} 
           value={option.value}
         >
          {option.label}
         </S.Option>
         </>
          ))}
         </S.Select>
         </S.SelectWrap>
         </>
    );
}

export default Select;