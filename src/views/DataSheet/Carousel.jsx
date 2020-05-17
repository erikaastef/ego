import React from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";

import {
  Container,
  Card,
  CardPhoto,
  CardTitle,
  CardContent,
  Children,
  Arrow,
  Dot,
  Dots,
} from "./CarouselStyles";

const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container>
    <Children>
      {children}

      <Arrow onClick={handleClick} data-position={position - 1}>
        {"<"}
      </Arrow>
      <Arrow right onClick={handleClick} data-position={position + 1}>
        {">"}
      </Arrow>
    </Children>
    <Dots>
      {Array(...Array(total)).map((val, index) => (
        <Dot key={index} onClick={handleClick} data-position={index}>
          {index === position ? "● " : "○ "}
        </Dot>
      ))}
    </Dots>
  </Container>
);

const CarouselContainer = makeCarousel(CarouselUI);

const featuresPhotos1 = [
  require("./img/airbags.png"),
  require("./img/isofix.png"),
  require("./img/asientosCuero.png"),
];
const featuresPhotos2 = [
  require("./img/cajaAutomatica.png"),
  require("./img/cajaManual.png"),
  require("./img/camaraTrasera.png"),
];
const featuresPhotos3 = [
  require("./img/climatizador.png"),
  require("./img/controlVelocidad.png"),
  require("./img/displayDigital.png"),
];

const Carousel = ({ features }) => {
  let num = Math.round(features.length / 3);
  let slide1 = features.splice(0, num);
  let slide2 = features.splice(0, num);
  let slide3 = features;

  return (
    <CarouselContainer defaultWait={6000}>
      <Slide right>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "auto",
          }}
        >
          {slide1.map((feature, index) => (
            <Card>
              <CardPhoto src={featuresPhotos1[index]} />
              <CardTitle>{feature.name}</CardTitle>
              <CardContent>{feature.description}</CardContent>
            </Card>
          ))}
        </div>
      </Slide>
      <Slide right>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "auto",
          }}
        >
          {slide2.map((feature, index) => (
            <Card>
              <CardPhoto src={featuresPhotos2[index]} />
              <CardTitle>{feature.name}</CardTitle>
              <CardContent>{feature.description}</CardContent>
            </Card>
          ))}
        </div>
      </Slide>
      <Slide right>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "auto",
          }}
        >
          {slide3.map((feature, index) => (
            <Card>
              <CardPhoto src={featuresPhotos3[index]} />
              <CardTitle>{feature.name}</CardTitle>
              <CardContent>{feature.description}</CardContent>
            </Card>
          ))}
        </div>
      </Slide>
    </CarouselContainer>
  );
};

export default Carousel;
