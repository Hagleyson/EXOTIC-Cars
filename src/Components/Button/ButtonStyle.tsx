import { theme } from "@globalStyle/theme";
import styled from "styled-components";

type propsType = {
    typeStyle?:string;
    secondary?:boolean;
    moveSlide?:boolean;
}
export const ButtonStyle = styled.button`  
    margin: 0 10px;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
    padding: 5px;

    ${(props:propsType)=>props.typeStyle === "header" && `
        width: 84px;
        height: 36px;
        font-size:16px;
        border:none;
        color:${theme.purple} ;
        background-color: ${theme.white};
        font-weight: bold;
        border-radius: 13px;
        ${props.secondary && `
            border:3px solid ${theme.purple};
            color:${theme.purple}    ;
        `}
    `}    
    ${(props:propsType)=>props.typeStyle === "carousel" && `        
        border:3px solid ${theme.darkGrey};
        background-color:${theme.darkGrey};
        font-size:16px;
        font-weight: lighter;
        color:${theme.white};   
        box-shadow: 0px 5px 20px #0000001A;
        border-radius: 25px;        
        border-width: 1px;        
        width: 177px;
        height: 50px;

        ${props.secondary && `
            background-color:${theme.white};
            color:${theme.darkGrey};
        `};

        ${props.moveSlide && `          
            height: 42px;
            border-radius:50%;
            padding:0px;
            width: 32px;
        `}
    `}
    
    
`