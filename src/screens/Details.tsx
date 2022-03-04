import { Button, Container, Layout, Title } from "@Components/index"
import { BsArrowRight, BsArrowLeft } from "react-icons/bs"

const Details =()=>{
    return <Layout>
        <Container type="details">
            <Container type="logo">
                <img src={require("../assets/img/ferrari/logoFerrari.png")} alt="ferrari"/>
                <Title type="textDetails">Ferrari California <p>$725/day</p></Title>                
            </Container>
            <Container type="colorDescription">
                <Title type="textDetails">01 <p>RED</p></Title>                
            </Container>
            <Container type="cartMain" >
                <Container>
                    <Button typeStyle="carousel" secondary> <BsArrowLeft/> Back to catalog</Button>
                </Container>
                <img src={require("../assets/img/ferrari/fCalifornia.png")} alt="ferrari2"  />
            </Container>
            
            <Container>
                <Button typeStyle="carousel">Book now <BsArrowRight/></Button>
            </Container>
            <Container>
                <Button typeStyle="carousel" action > <BsArrowLeft/></Button>
                <Button typeStyle="carousel" action><BsArrowRight/></Button>
            </Container>
        </Container>
    </Layout>
}

export default Details