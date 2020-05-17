import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchModelDetails } from "../../store/actions";

import {
  Box,
  Card,
  CardContent,
  CardPhoto,
  CardTitle,
  Carousel,
  Container,
  Photo,
  Info,
  InfoTitle,
  InfoContent,
  Emphasis,
} from "./styles";
const DataSheet = () => {
  let { id } = useParams();

  const dispatch = useDispatch();

  const featuresPhotos = [
    require("./img/airbags.png"),
    require("./img/isofix.png"),
    require("./img/asientosCuero.png"),
    require("./img/cajaAutomatica.png"),
    require("./img/cajaManual.png"),
    require("./img/camaraTrasera.png"),
    require("./img/climatizador.png"),
    require("./img/controlVelocidad.png"),
    require("./img/displayDigital.png"),
  ];
  const details = useSelector((state) => state.modelDetails);

  useEffect(() => {
    dispatch(fetchModelDetails(id));
  }, [dispatch, id]);

  console.log(details);
  return (
    <>
      {details ? (
        <Container>
          <Box>
            <Photo src={require(`../assets/${details.name}.png`)} />
            <Info>
              <InfoTitle>{details.name}</InfoTitle>
              <Emphasis>{details.title}</Emphasis>
              <InfoContent>{details.description}</InfoContent>
            </Info>
          </Box>
          <Carousel>
            {details.model_features
              ? details.model_features.map((feature, index) => (
                  <Card key={index}>
                    <CardPhoto src={featuresPhotos[index]} />
                    <CardTitle>{feature.name}</CardTitle>
                    <CardContent>{feature.description}</CardContent>
                  </Card>
                ))
              : ""}
          </Carousel>
          {details.model_highlights
            ? details.model_highlights.map((highlight, index) =>
                index === 0 ? (
                  <Box key={index}>
                    <Info>
                      <InfoTitle>{highlight.title}</InfoTitle>
                      <InfoContent>{highlight.content}</InfoContent>
                    </Info>
                    <Photo src={require(`../assets/${details.name}.png`)} />
                  </Box>
                ) : (
                  <Box key={index}>
                    <Photo src={require(`../assets/${details.name}.png`)} />
                    <Info>
                      <InfoTitle>{highlight.title}</InfoTitle>
                      <InfoContent>{highlight.content}</InfoContent>
                    </Info>
                  </Box>
                )
              )
            : ""}
        </Container>
      ) : (
        ""
      )}
    </>
  );
};

export default DataSheet;
