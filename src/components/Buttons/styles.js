import styled from "styled-components";

export const Button = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    color: #FFE4E1;
    font-size: ${(props) => props.fontSize};
    font-weight: bold;
    border-radius: 8px;
    border-color: #FFFFFF;
    background-color: ${(props) => props.background};


`