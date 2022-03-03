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
    
    ${(props:propsType)=>props.type === "cartModel" &&`
        position:absolute;
        top:5px;
        left:5px;
        font-size:17px;
        font-weight: bold;        
        >h1{
          font-weight: lighter;        
          font-size:17px;
        }
    `}
    ${(props:propsType)=>props.type === "cartPrice" &&`
        position:absolute;
        bottom:5px;
        right:5px;
        font-size:24px;
        font-weight: bold;       
        color:${theme.darkGrey} ;

        span{
            font-size:14px;
            
        }
        span:first-child{                        
            top:10px;
            position:absolute;
            top:-2px;
            left:-10px;
        }

        span:last-child{
            font-weight: lighter;          
        }
        
    `}
    
    
`