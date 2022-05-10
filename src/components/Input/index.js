import * as S from './styles'

const Input = ({label}) => {
    return(
        <S.InputWraper>
            <S.DescriptionInput>{label}</S.DescriptionInput>
            <S.InputText/>
        </S.InputWraper>
    );
}

export default Input