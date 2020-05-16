import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchModels } from "../../store/actions";
import {
  Container,
  Header,
  Filter,
  Box,
  Option,
  Catalog,
  Card,
  Info,
  Name,
  Year,
  Price,
  Photo,
} from "./styles";
const Home = () => {
  const dispatch = useDispatch();

  const models = useSelector((state) => state.models);

  useEffect(() => {
    dispatch(fetchModels());
  }, [dispatch]);
  console.log(models);
  return (
    <Container>
      <Header>Descubrí todos los modelos </Header>
      <Filter>
        <Box>
          <span>Filtra por</span>
          <Option>Todos</Option>
          <Option>Autos</Option>
          <Option>Pickups y Comerciales</Option>
          <Option>SUVs y Crossovers</Option>
        </Box>
        <span>Ordenar por</span>
      </Filter>
      <Catalog>
        {models
          ? models.map((model) => (
              <Card key={model.id}>
                <Name>{model.name}</Name>
                <Info>
                  <Year>{model.year}</Year>
                  <Price>${model.price}</Price>
                </Info>
                {model.name === "Hilux GR-Sport" ? (
                  <Photo src={require(`./img/Hilux2.png`)} />
                ) : (
                  <Photo src={require(`./img/${model.name}.png`)} />
                )}
              </Card>
            ))
          : ""}
      </Catalog>
    </Container>
  );
};

export default Home;
