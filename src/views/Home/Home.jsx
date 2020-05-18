import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  fetchModels,
  orderModels,
  menorMayorOption,
  mayorMenorOption,
  nuevosOption,
  viejosOption,
  currentView,
} from "../../store/actions";

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
  Select,
} from "./styles";
const Home = () => {
  const dispatch = useDispatch();

  dispatch(currentView("home", true));
  dispatch(currentView("details", false));

  const [cardHover, setCardHover] = useState(false);
  const [currentId, setCurrentId] = useState(false);
  const [category, setCategory] = useState("Todos");
  const [order, setOrder] = useState("Nada");
  const history = useHistory();
  const models = useSelector((state) => state.models);
  const orderedModels = useSelector((state) => state.orderedModels);

  // }

  useEffect(() => {
    dispatch(fetchModels());

    switch (order) {
      case "Nada":
        return dispatch(orderModels(order, models));

      case "De menor a mayor precio":
        return dispatch(orderModels(order, menorMayorOption(models)));

      case "De mayor a menor precio":
        return dispatch(orderModels(order, mayorMenorOption(models)));

      case "Más nuevos primero":
        return dispatch(orderModels(order, nuevosOption(models)));

      case "Más viejos primero":
        return dispatch(orderModels(order, viejosOption(models)));

      default:
        return;
    }
  }, [dispatch, models, order]);

  return (
    <Container>
      <Header>Descubrí todos los modelos </Header>
      <Filter>
        <Box>
          <span>Filtra por</span>
          <Option onClick={() => setCategory("Todos")}>Todos</Option>
          <Option onClick={() => setCategory("Autos")}>Autos</Option>
          <Option onClick={() => setCategory("Pickups y Comerciales")}>
            Pickups y Comerciales
          </Option>
          <Option onClick={() => setCategory("SUVs y Crossovers")}>
            SUVs y Crossovers
          </Option>
        </Box>
        <Select hidden onChange={(e) => setCategory(e.target.value)}>
          <option value="" hidden>
            Filtrar por:
          </option>
          <option value="Todos">Todos</option>
          <option value="Autos">Autos</option>
          <option value="Pickups y Comerciales">Pickups y Comerciales</option>
          <option value="SUVs y Crossovers">SUVs y Crossovers</option>
        </Select>
        <Select
          onChange={(e) => {
            setOrder(e.target.value);
          }}
        >
          <option value="" hidden>
            Ordenar por:
          </option>
          <option value="Nada">Nada</option>
          <option value="De menor a mayor precio">
            De menor a mayor precio
          </option>
          <option value="De mayor a menor precio">
            De mayor a menor precio
          </option>
          <option value="Más nuevos primero">Más nuevos primero</option>
          <option value="Más viejos primero">Más viejos primero</option>
        </Select>
      </Filter>
      <Catalog>
        {orderedModels
          ? orderedModels.map((model) =>
              (category !== "Todos" && model.segment === category) ||
              category === "Todos" ? (
                <Card
                  key={model.id}
                  onMouseOver={() => {
                    setCurrentId(model.id);
                    currentId === model.id && setCardHover(true);
                  }}
                  onClick={() => history.push(`/${model.id}`)}
                  onMouseLeave={() => setCardHover(!cardHover)}
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
                    <Button >
                      Ver modelo
                    </Button>
                  )}
                </Card>
              ) : (
                <></>
              )
            )
          : ""}
      </Catalog>
    </Container>
  );
};

export default Home;
