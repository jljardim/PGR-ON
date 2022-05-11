import * as S from './styles'

const Input = ({label, placeHolder, valueOnChange, typeInput}) => {
    return(
        <S.InputWraper>
            <S.DescriptionInput>{label}</S.DescriptionInput>
            <S.InputText
                placeholder={placeHolder}
                required
                onChange={valueOnChange}
                type={typeInput}
            />
        </S.InputWraper>
    );
}

export default Input