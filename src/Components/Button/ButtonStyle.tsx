import { theme } from "@globalStyle/theme";
import styled from "styled-components";

type propsType = {
    typeStyle?:string
}
export const ButtonStyle = styled.button`
    width: 84px;
    height: 36px;
    border-radius: 13px;
    margin: 0 10px;
    cursor: pointer;
    font-weight: bold;
    background-color: ${theme.white};
    font-size:16px;

    ${(props:propsType)=>props.typeStyle === "primary" && `
        border:none;
        color:${theme.purple} 
    `}
    ${(props:propsType)=>props.typeStyle === "secondary" && `
        border:3px solid ${theme.purple};
        color:${theme.purple}     
    `}

`