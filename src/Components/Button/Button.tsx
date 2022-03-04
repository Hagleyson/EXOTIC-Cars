import { FC } from "react"
import { ButtonStyle } from "./ButtonStyle"

type propsType = {
    typeStyle?:string;
    secondary?:boolean;
    action?:boolean;
}
const Button:FC<propsType> =(props)=>{
    return <ButtonStyle typeStyle={props.typeStyle} action={props.action} secondary={props.secondary}>{props.children}</ButtonStyle>
}
export default Button