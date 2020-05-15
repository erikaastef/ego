import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  CloseButton,
  Container,
  CloseIcon,
  List,
  Divider,
  ListItem,
} from "./SideNavStyles";
const SideNav = () => {
  const [closeState, setCloseState] = useState(false);
  List.defaultProps = {
    theme: {
      main: "#ffffff",
    },
  };
  const theme = {
    main: "#efeeef",
  };

  return (
    <>
      {!closeState ? (
        <Container>
          <CloseButton onClick={() => setCloseState(!closeState)}>
            <span>Cerrar</span> <CloseIcon />
          </CloseButton>
          <List>
            <ListItem>Modelos</ListItem>
            <ListItem>Servicios y accesorios</ListItem>
            <ListItem>Financiación</ListItem>
            <ListItem>Reviews y Comunidad</ListItem>
          </List>
          <Divider />
          <List>
            <ListItem>Toyota Mobility Service</ListItem>
            <ListItem>Toyota Gazoo Racing</ListItem>
            <ListItem>Toyota Híbridos</ListItem>
          </List>
          <Divider />
          <List>
            <ListItem>Concesionarios</ListItem>
            <ListItem>Test Drive</ListItem>
            <ListItem>Contacto</ListItem>
          </List>
          <ThemeProvider theme={theme}>
            <List>
              <ListItem>Actividades</ListItem>
              <ListItem>Servicios al Cliente</ListItem>
              <ListItem>Ventas Especiales</ListItem>
              <ListItem>Innovación</ListItem>
              <ListItem>Prensa</ListItem>
              <ListItem>Acerca de..</ListItem>
            </List>
          </ThemeProvider>
        </Container>
      ) : (
        ""
      )}
    </>
  );
};

export default SideNav;
