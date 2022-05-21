import styled, {css} from "styled-components";

export const ContanierWraper = styled.div`
    width: ${(props) => props.width || "auto"};
    display: ${(props) => props.display || "flex"};
    flex-direction: ${(props) => props.flexDirection || "column"};
    flex-wrap: ${(props) => props.wrap || "wrap"};
    
`

export const LabelWraper = styled.label`
    width: ${(props) => props.width || "auto"};
    font-weight: ${(props) => props.fontWeight || "bold"};
    font-size: ${(props) => props.fontSize || "16px"};
    margin-bottom: ${(props) => props.marginBottom || "5px"};
    padding-top: 10PX;

`
export const InputWraper = styled.input`
    width: ${(props) => props.width || "380px"};
    height: ${(props) => props.height || "25px"};
    border-radius: ${(props) => props.borderRadius || "2px"};
    padding: ${(props) => props.padding || "5px 10px"};
    border: ${(props) => props.border || "1px solid #ced4da"};
    caret-color: red;
    
`