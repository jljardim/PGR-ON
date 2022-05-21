import styled from "styled-components";

export const Button = styled.button`
    width: ${(props) => props.width || "260px"};
    height: ${(props) => props.height || "40px"};
    color: ${(props) => props.color || "#FFE4E1"};
    font-size: ${(props) => props.fontSize || "16px"};
    font-weight: ${(props) => props.fontWeight || "bold"};
    border-radius: ${(props) => props.borderRadius || "8px"};
    border-color: ${(props) => props.borderColor || "#FFFFFF"};
    background-color: ${(props) => props.background || "#DAA520"};
`