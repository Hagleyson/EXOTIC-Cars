import { Card, Container, Layout, Loader } from "@Components/index";
import { useEffect, useState } from "react";
import { fetchCar } from "src/helpers";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const loaderCars = async () => {
      setIsLoading(true);
      const request = await fetchCar();
      setCars(request);
      setIsLoading(false);
    };
    loaderCars();
  }, []);

  return (
    <Layout type="home">
      {isLoading ? (
        <Loader />
      ) : (
        <Container type="home">
          {cars.map(({ id, name, model, price, imgs, logo }) => (
            <Card
              id={id}
              key={id}
              name={name}
              model={model}
              price={price}
              imgs={imgs}
              logo={logo}
            />
          ))}
        </Container>
      )}
    </Layout>
  );
};

export default Home;
