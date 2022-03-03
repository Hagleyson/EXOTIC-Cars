
import { theme } from "@globalStyle/theme";
import styled from "styled-components";
type propsType={
    type?:string
}
export const ContainerStyle = styled.div`    
    display: flex;
    justify-content: flex-start;    
    align-items: center;    
    flex-direction:row;
   
    ${(props:propsType)=>props.type === "home" && `
        width:100%;
        height: 100%;            
        display: flex;
        padding:10px 100px;
        justify-content: space-between;          
        flex-wrap: wrap;
        align-items: flex-start;         
    `}
    
    ${(props:propsType)=>props.type === "cardImage" &&`        
        max-width: 100%;
        height:100%;
        max-height:100%;    
        position:relative;         
        display:flex;
        justify-content: center;        
        img{
            max-width: 80%;            
            position:absolute;
        }
        @media screen and (max-width: 612px){
            img{                
                max-width:90%;
            }
        }
    `}
    ${(props:propsType)=>props.type === "ball" &&`
        position:absolute;        
        top: 10px;
        right: 10px;
        span{        
            height: 10px;
            width: 10px;            
            border:2px solid ${theme.ball};
            border-radius: 50%;
            margin-left:4px;
            cursor:pointer;
        }            
        .selected{
            background-color: ${theme.ball};
        }
    `}   

`