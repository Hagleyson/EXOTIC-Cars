import {
  Button,
  Container,
  ContentCarousel,
  Layout,
  Title,
} from "@Components/index";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img/ferrari/FerrariCalifornia2.png";
import img2 from "../assets/img/ferrari/FerrariCalifornia3.png";
import img3 from "../assets/img/ferrari/FerrariCalifornia.png";
import { useState } from "react";
const Details = () => {
  const navigate = useNavigate();
  const carousel = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
  ];
  const [currentImage, setCurrentImage] = useState(carousel[1] || carousel[0]);
  const [imgs, setImgs] = useState(carousel);
  const redirect = () => {
    navigate("/");
  };
  const nextImage = () => {
    let x: any[] = [];
    let newArray: any[] = [];
    if (imgs.length === 1) return;
    imgs.forEach((img, idx, array) => {
      if (currentImage.id === img.id) {
        x.push(array[idx + 1]);
        newArray.push(array[idx]);
        newArray.push(array[idx + 1]);
        newArray.push(array[idx - 1]);
      }
    });
    setCurrentImage(x[0]);
    setImgs(newArray);
  };

  const prevImage = () => {
    let x: any[] = [];
    let newArray: any[] = [];
    if (imgs.length === 1) return;
    imgs.forEach((img, idx, array) => {
      if (currentImage.id === img.id) {
        x.push(array[idx - 1]);
        newArray.push(array[idx + 1]);
        newArray.push(array[idx - 1]);
        newArray.push(array[idx]);
      }
    });
    setCurrentImage(x[0]);
    setImgs(newArray);
  };
  const listCarCarousel = () => {
    return imgs.map((img) => {
      return (
        <ContentCarousel
          selected={img.id === currentImage.id}
          key={img.id}
          img={img.img}
          handleClick={() => setCurrentImage(img)}
        />
      );
    });
  };
  return (
    <Layout>
      <Container type="details">
        <Container type="logo">
          <img
            src={require("../assets/img/ferrari/logoFerrari.png")}
            alt="ferrari"
          />
          <Title type="textDetails">
            Ferrari California <p>$725/day</p>
          </Title>
        </Container>
        <Container type="colorDescription">
          <Title type="textDetails">
            01 <p>Red</p>
          </Title>
        </Container>
        <Container type="cartMain">
          <Container>
            <Button typeStyle="carousel" handleClick={redirect} secondary>
              <BsArrowLeft /> Back to catalog
            </Button>
          </Container>
          <Container type="imgShowCart">
            <img src={currentImage.img} alt="ferrari2" />
            <Button typeStyle="carousel">
              Book now <BsArrowRight />
            </Button>
          </Container>
        </Container>
        <Container type="carousel">
          <Button handleClick={prevImage} typeStyle="carousel" action={true}>
            <BsArrowLeft />
          </Button>
          <Container type="imgsCarousel">{listCarCarousel()}</Container>
          <Button handleClick={nextImage} typeStyle="carousel" action={true}>
            <BsArrowRight />
          </Button>
        </Container>
      </Container>
    </Layout>
  );
};

export default Details;
