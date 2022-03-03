import styled from "styled-components"
import {theme} from "@globalStyle/index"
export const CardStyles = styled.div`
    width: calc(100% / 4 - 10px);
    margin-bottom: 15px;
    height: 223px;
    background-color: ${theme.card};        
    position: relative;    
    border-radius: 10px;
    @media screen and (max-width: 1335px){
        width: calc(100% / 3 - 10px) ;
    }
    @media screen and (max-width: 1335px){
        width: calc(100% / 2 - 10px) ;
    }
    @media screen and (max-width: 612px){
        width: 100%;
    }
    &:hover{
        cursor: pointer;
        background: transparent linear-gradient(52deg, #A1A7F4 0%, #E6D3F1 100%) 0% 0% no-repeat padding-box;
    }
`