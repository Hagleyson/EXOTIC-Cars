
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
    flex-wrap :wrap ;
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
        width:100%;
        max-width: 100%;
        height:100%;
        max-height:100%;    
        position:relative;         
        display:flex;
        justify-content: center;                
        img{
            max-width: 70%;            
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
        top: 25px;
        right: 15px;
        z-index:9999;  
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
    ${(props:propsType)=>props.type === "card" &&`
           width: 100%;
           height: 100%;      
               
    `}   
    ${(props:propsType)=>props.type === "details" &&`
        width: 100%;
        height: 100%;      
        background: transparent linear-gradient(125deg, #FFFFFF 0%, #D8D7D7 100%) 0% 0% no-repeat padding-box;               
        position:relative;                  
    `}

     ${(props:propsType)=>props.type === "logo" &&`          
        position:absolute;
        top:60px;
        left: 40px;                        
        >img{
          width   :91px ;
          height: 123px;
        }
    `}

    ${(props:propsType)=>props.type === "colorDescription" &&`
        position:absolute;        
        top:120px;
        right: 80px;               
    `}
    
    ${(props:propsType)=>props.type ==="cartMain" && `
        width: 100%;
        height: 60%;
        justify-content: center;
        position:relative;                
        >div:first-child{                        
            padding-left:40px;
            position:absolute;
            left:40px;
            top:calc(50% - 10px);        
        }                                   
    `}
    ${(props:propsType)=>props.type ==="imgShowCart" && `
        width: 100%;
        height: 100%;
        justify-content: center;                        
        flex-direction: column;        
        >img{
            width: 50%;
            height: 50%;       
                 
        }    
    `}
     ${(props:propsType)=>props.type ==="carousel" && `
        width: 100%;
        height:40%;
        max-height: 40%;   
        background:gold;             
        justify-content: space-around;
        align-items: center;
     `};
     
`