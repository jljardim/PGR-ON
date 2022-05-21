import styled from "styled-components";

export const SelectWrap = styled.div`
   width: ${(props) => props.width || "auto"};
   padding-top: ${(props) => props.paddindTop || "0px"};
   display: ${(props) => props.display || "flex"};
   flex-direction: ${(props) => props.flexDirection || "column"}; 
   gap: ${(props) => props.flexDirection || "5px"};
`
export const Select = styled.select`
    height: ${(props) => props.height || "36.5px"};
    width: ${(props) => props.width || "400px"};
`
export const Label = styled.label`
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "bold"};
`
export const Option = styled.option`
  color: ${(props) => props.option}
`
