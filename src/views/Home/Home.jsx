import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
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
  Button,
} from "./styles";
const Home = () => {
  const dispatch = useDispatch();

  const [cardHover, setCardHover] = useState(false);
  const [currentId, setCurrentId] = useState(false);

  const history = useHistory();
  const models = useSelector((state) => state.models);

  useEffect(() => {
    dispatch(fetchModels());
  }, [dispatch]);
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
              <Card
                key={model.id}
                onMouseOver={(e) => {
                  setCurrentId(model.id);
                  currentId === model.id && setCardHover(true);
                }}
                onMouseLeave={(e) => setCardHover(!cardHover)}
              >
                {cardHover && currentId === model.id ? (
                  <Name hover>{model.name}</Name>
                ) : (
                  <Name>{model.name}</Name>
                )}
                <Info>
                  <Year>{model.year}</Year>
                  <Price>${model.price}</Price>
                </Info>
                {model.name === "Hilux GR-Sport" ? (
                  <Photo src={require(`../assets/Hilux2.png`)} />
                ) : (
                  <Photo src={require(`../assets/${model.name}.png`)} />
                )}
                {cardHover && currentId === model.id ? (
                  <Button hover onClick={() => history.push(`/${model.id}`)}>
                    Ver modelo
                  </Button>
                ) : (
                  <Button>Ver modelo</Button>
                )}
              </Card>
            ))
          : ""}
      </Catalog>
    </Container>
  );
};

export default Home;
