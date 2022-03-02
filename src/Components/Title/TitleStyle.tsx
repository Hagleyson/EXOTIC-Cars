import { theme } from "@globalStyle/theme";
import styled from "styled-components";

type propsType ={
    type?:string
}

export const TitleStyle = styled.h1`  
    ${(props:propsType)=>props.type === "mainHeader" &&`       
       font-weight: 400;             
       font-size: 32px;
       color:${theme.darkGrey}      
       display: flex;       
       justify-content: flex-start;
       span{
        font-weight: 400;             
        font-size: 21px;
        color:${theme.darkGrey}       
       }   
    `}     
    ${(props:propsType)=> props.type === "headerSecondary" && `
        font-weight: 400;
        font-size: 16px;
        color: ${theme.gray};
        justify-content: center;
        align-items: center;
        margin: 0 40px  0 0;
    `}   
    
`