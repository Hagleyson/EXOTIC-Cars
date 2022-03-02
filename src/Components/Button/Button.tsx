import { FC } from "react"
import { ButtonStyle } from "./ButtonStyle"

type propsType = {
    typeStyle?:string
}
const Button:FC<propsType> =(props)=>{
    return <ButtonStyle typeStyle={props.typeStyle}>{props.children}</ButtonStyle>
}
export default Button