import styled from "styled-components"

type propsType = {
    selected?:boolean;
}
export const ContentCarouselStyle = styled.div`
    width: 20%;
    height: 100%;
    align-items: center;
    
    >div{
        width: 100%;  
        height:70% ;
        background: #CECECE 0% 0% no-repeat padding-box;
    }
    ${(props:propsType)=>props.selected && `
        >div{
        width: 100%;  
        height:99% ;
        background: #CECECE 0% 0% no-repeat padding-box;
    } 
    `}

    img{
        width: 120%;
        height: 100%;
    }
`