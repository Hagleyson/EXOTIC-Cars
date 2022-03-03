
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
        img{
            max-width: 100%;            
        }
    `}

`