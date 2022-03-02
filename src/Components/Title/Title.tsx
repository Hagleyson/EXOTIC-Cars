import { FC } from "react"
import { TitleStyle } from "./TitleStyle"

type propsType ={
    type?:string
}
const Title:FC<propsType> =(props)=>{
    return <TitleStyle type={props.type}>{props.children}</TitleStyle>
}

export default Title