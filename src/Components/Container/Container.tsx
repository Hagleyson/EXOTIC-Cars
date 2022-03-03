import { FC } from "react"
import { ContainerStyle } from "./ContainerStyle"

type propsType={
    type?:string
}
const Container:FC<propsType> = (props)=>{
    return <ContainerStyle type={props.type}>{props.children}</ContainerStyle>
}

export default Container;