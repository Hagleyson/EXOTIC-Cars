import { FC, useState } from "react";

import { Container, Title } from "..";
import { CardStyles } from "./CardStyles";

import { useNavigate } from "react-router-dom";
type propsType = {
  name?: string;
  model?: string;
  imgs: { img: string; label: string }[];
  price?: string;
};

const Card: FC<propsType> = (props) => {
  const [selectedImg, setSelectedImg] = useState(0);
  const navigate = useNavigate();
  const toggleImage = (idx: number) => {
    setSelectedImg(idx);
  };
  const redirect = () => {
    navigate("/details");
  };
  return (
    <CardStyles>
      <Container type="ball">
        {props.imgs?.map((img, idx) => (
          <span
            key={idx}
            className={selectedImg === idx ? "selected" : undefined}
            onClick={() => toggleImage(idx)}
          />
        ))}
      </Container>
      <Container handleClick={redirect} type="card">
        <Title type="cardModel">
          {props.name} <p>{props.model?.toUpperCase()}</p>
        </Title>

        <Container type="cardImage">
          {
            <img
              src={props.imgs[selectedImg].img}
              alt={props.imgs[selectedImg].label}
            />
          }
        </Container>
        <Title type="cardPrice">
          <span>$</span>
          {props.price}
          <span>/day</span>
        </Title>
        <Title type="cardBook">Book Now</Title>
      </Container>
    </CardStyles>
  );
};

export default Card;
