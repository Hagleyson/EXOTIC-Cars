import {
  Button,
  Card,
  Container,
  Layout,
  Loader,
  Title,
} from "@Components/index";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigator = useNavigate();
  return (
    <Container type="notFound">
      <Title>404 Page Not Found</Title>
      <Button handleClick={() => navigator("/")} typeStyle="carousel" secondary>
        <BsArrowLeft /> Back to catalog
      </Button>
    </Container>
  );
};

export default NotFound;
