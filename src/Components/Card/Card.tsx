import { FC } from "react"
import { Container, Title } from "..";
import { CardStyles } from "./CardStyles"

const Card:FC =(props)=>{
    return <CardStyles> 
            <Title type="cartModel">Ferrari <Title>CALIFORNIA</Title></Title>
            <Container type="cardImage"> 
                <img src={require("../../assets/img/ferrari/fCalifornia.png")} alt="car"/>
            </Container>
            <Title type="cartPrice"> <span>$</span>725<span>/day</span></Title>
          </CardStyles>
}

export default Card;