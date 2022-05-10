import * as S from './styles'

const Select = ({titleLabel, options, value, onChange}) => {
    return (
      <>
      <S.SelectWrap>
        <S.Label>{titleLabel}</S.Label>
        <S.Select value={value} onChange={onChange} className="label_select_message">
          <option></option>
          {options.map((option) => (
            <>
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            </>
          ))}
        </S.Select>
     { /*  <select value={value} onChange={onChange} className="label_select_message">
          <option className="label_select_message"></option>
          {options.map((option) => (
            <>
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            </>
          ))}
          </select> */}
        </S.SelectWrap>
      </>
      
    );
}

export default Select;