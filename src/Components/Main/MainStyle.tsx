import { theme } from "@globalStyle/theme";
import styled from "styled-components";


export const MainStyle = styled.main`
    width: 100%;
    height: calc(100vh - 100px) ;
    max-height: calc(100vh - 80px);
    background-color: ${theme.white};
    overflow: auto;
    margin-top: 20px;
    
`