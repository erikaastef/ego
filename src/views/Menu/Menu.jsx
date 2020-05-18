import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { Container, Logo, HamburgerMenu, Box, Button } from "./MenuStyles";

import SideNav from "./SideNav";

const Menu = () => {
  const [navState, setNavState] = useState(false);
  const history = useHistory();
  const home = useSelector((state) => state.home);
  const details = useSelector((state) => state.details);

  return (
    <>
      <Container>
        <Box>
          <Logo onClick={() => history.push("/")} />
          {home ? (
            <Button emphasis onClick={() => history.push("/")}>
              Modelos
            </Button>
          ) : (
            <Button onClick={() => history.push("/")}>Modelos</Button>
          )}
          {details ? (
            <Button emphasis>Ficha de modelo</Button>
          ) : (
            <Button>Ficha de modelo</Button>
          )}
        </Box>
        <Box onClick={() => setNavState(!navState)}>
          <span>Menú</span>
          <HamburgerMenu />
        </Box>
      </Container>
      {navState ? <SideNav /> : ""}
    </>
  );
};

export default Menu;
