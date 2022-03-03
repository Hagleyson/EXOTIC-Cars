import React, { FC, useState } from "react"
import { Container, Title } from "..";
import { CardStyles } from "./CardStyles"

type propsType = {
    name?:string;
    model?:string;   
    imgs:{img:string,label:string}[];
    price?:string;
}
const Card:FC<propsType> =(props)=>{
    const [selectedImg,setSelectedImg]=useState(0)
    const toggleImage = (idx:number)=>{
        setSelectedImg(idx)
    }
    return <CardStyles> 
            <Title type="cartModel">{props.name} <p>{props.model?.toUpperCase()}</p></Title>

            <Container type="cardImage"> 
                <Container  type="ball">
                    {props.imgs?.map((img,idx)=>                     
                        <span key={idx} className={selectedImg === idx?"selected":undefined} onClick={()=>toggleImage(idx)}/>
                    )}
                </Container>
                {<img src={props.imgs[selectedImg].img} alt={props.imgs[selectedImg].label}/>}               
                         
            </Container>
            <Title type="cartPrice"> <span>$</span>{props.price}<span>/day</span></Title>
          </CardStyles>
}

export default Card;