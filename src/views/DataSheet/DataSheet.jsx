import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchModelDetails, currentView } from "../../store/actions";
import { CircularProgress } from "@material-ui/core";
import Carousel from "./Carousel";

import {
  Box,
  CircularProgressContainer,
  Container,
  Photo,
  Info,
  InfoTitle,
  InfoContent,
  Emphasis,
} from "./DataStyles";

const DataSheet = () => {
  let { id } = useParams();

  const dispatch = useDispatch();

  dispatch(currentView("home", false));
  dispatch(currentView("details", true));

  const details = useSelector((state) => state.modelDetails);

  useEffect(() => {
    dispatch(fetchModelDetails(id));
  }, [dispatch, id]);

 
  return (
    <>
      {details ? (
        <Container>
          <Box>
            {details.name === "Hilux GR-Sport" ? (
              <Photo src={require(`../assets/Hilux2.png`)} />
            ) : (
              <Photo src={require(`../assets/${details.name}.png`)} />
            )}
            <Info>
              <InfoTitle>{details.name}</InfoTitle>
              <Emphasis>{details.title}</Emphasis>
              <InfoContent>{details.description}</InfoContent>
            </Info>
          </Box>

          <Carousel features={details.model_features} />

          {details.model_highlights
            ? details.model_highlights.map((highlight, index) =>
                index === 0 ? (
                  <Box reverse key={index}>
                    <Info>
                      <InfoTitle>{highlight.title}</InfoTitle>
                      <InfoContent>{highlight.content}</InfoContent>
                    </Info>
                    {details.name === "Hilux GR-Sport" ? (
                      <Photo src={require(`../assets/Hilux2.png`)} />
                    ) : (
                      <Photo src={require(`../assets/${details.name}.png`)} />
                    )}
                  </Box>
                ) : (
                  <Box  key={index}>
                    {" "}
                    {details.name === "Hilux GR-Sport" ? (
                      <Photo src={require(`../assets/Hilux2.png`)} />
                    ) : (
                      <Photo src={require(`../assets/${details.name}.png`)} />
                    )}
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
        <CircularProgressContainer>
          <CircularProgress size={50} style={{ color: "#eb0a1e" }} />
        </CircularProgressContainer>
      )}
    </>
  );
};

export default DataSheet;
