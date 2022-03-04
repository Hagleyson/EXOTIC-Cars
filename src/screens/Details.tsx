import { Button, Container, ContentCarousel, Layout, Title } from "@Components/index"
import { BsArrowRight, BsArrowLeft } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import img1 from "../assets/img/ferrari/FerrariCalifornia2.png"
import img2 from "../assets/img/ferrari/FerrariCalifornia3.png"
import img3 from "../assets/img/ferrari/FerrariCalifornia.png"
const Details =()=>{
    const navigate = useNavigate()
    const redirect =()=>{
        navigate("/")
    }
    return <Layout>
        <Container type="details">
            <Container type="logo">
                <img src={require("../assets/img/ferrari/logoFerrari.png")} alt="ferrari"/>
                <Title type="textDetails">Ferrari California <p>$725/day</p></Title>                
            </Container>
            <Container type="colorDescription">
                <Title type="textDetails">01 <p>Red</p></Title>                
            </Container>
            <Container type="cartMain" >
                <Container>
                    <Button typeStyle="carousel" handleClick={redirect} secondary> <BsArrowLeft/> Back to catalog</Button>
                </Container>
                <Container type="imgShowCart">
                    <img src={require("../assets/img/ferrari/fCalifornia.png")} alt="ferrari2"  />
                    <Button typeStyle="carousel">Book now <BsArrowRight/></Button>
                </Container>
            </Container>
            <Container type="carousel">
                <Button typeStyle="carousel" action={true} > <BsArrowLeft/></Button>
                <ContentCarousel  img={img1}/>
                <ContentCarousel selected img={img2}/>
                <ContentCarousel img={img3}/>
                <Button typeStyle="carousel" action={true}><BsArrowRight/></Button>
            </Container>
        </Container>
    </Layout>
}

export default Details