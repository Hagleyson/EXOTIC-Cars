import styled from "styled-components"
import {theme} from "@globalStyle/index"
export const CardStyles = styled.div`
    width: calc(100% / 4 - 10px);
    margin-bottom: 15px;
    height: 223px;
    background-color: ${theme.card};    
    position: relative;    
`