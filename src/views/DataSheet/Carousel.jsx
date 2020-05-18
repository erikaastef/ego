import React from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";

import {
  Container,
  Card,
  CardsContainer,
  CardPhoto,
  CardTitle,
  CardContent,
  Children,
  Arrow,
  Dot,
  Dots,
  Icon,
  Mask,
  SelectedDot,
  UnselectedDot,
} from "./CarouselStyles";

const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container>
    <Children>
      {children}
      <Arrow derecha onClick={handleClick} data-position={position - 1}>
        <Mask>
          <Icon src={require("./img/leftArrow.png")} />
        </Mask>
      </Arrow>

      <Arrow right onClick={handleClick} data-position={position + 1}>
        <Mask>
          <Icon src={require("./img/rightArrow.png")} />
        </Mask>
      </Arrow>
    </Children>
    <Dots>
      {Array(...Array(total)).map((val, index) => (
        <Dot key={index} onClick={handleClick} data-position={index}>
          {index === position ? <SelectedDot /> : <UnselectedDot />}
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
  require("./img/cajaAutomatica.png"),
  require("./img/cajaManual.png"),
];
const featuresPhotos2 = [
  require("./img/camaraTrasera.png"),
  require("./img/climatizador.png"),
  require("./img/controlVelocidad.png"),
  require("./img/displayDigital.png"),
];


const Carousel = ({ features }) => {

  let num = Math.round(features.length / 2);
  let slide1 = features.splice(0, num);
  let slide2 = features.splice(0, num);

  return (
    <CarouselContainer swipe defaultWait={6000}>
      <Slide right>
        <CardsContainer>
          {slide1.map((feature, index) => (
            <Card>
              <CardPhoto src={featuresPhotos1[index]} />
              <CardTitle>{feature.name}</CardTitle>
              <CardContent>{feature.description}</CardContent>
            </Card>
          ))}
        </CardsContainer>
      </Slide>
      <Slide right>
        <CardsContainer>
          {slide2.map((feature, index) => (
            <Card>
              <CardPhoto src={featuresPhotos2[index]} />
              <CardTitle>{feature.name}</CardTitle>
              <CardContent>{feature.description}</CardContent>
            </Card>
          ))}
        </CardsContainer>
      </Slide>
    </CarouselContainer>
  );
};

export default Carousel;
