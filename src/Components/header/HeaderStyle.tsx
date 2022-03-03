import styled from "styled-components"
import { theme } from "@globalStyle/index"


export const HeaderStyle  = styled.header`   
   width: 100%;
   height: 80px;
   padding: 20px 100px;
   display: flex;
   justify-content: space-between;
   background-color: ${theme.white};   
   box-shadow: ${theme.boxShadow};
`