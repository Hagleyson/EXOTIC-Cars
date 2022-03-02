import styled from "styled-components"
import { theme } from "../../globalStyle/theme"


export const LayoutStyle  = styled.div`
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    >header{
        width: 100%;
        padding: 40px;
        display: flex;
        justify-content: space-between;
        background-color: ${theme.white};
    }
`