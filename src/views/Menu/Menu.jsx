import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Container, Logo, HamburgerMenu, Box, Button } from "./MenuStyles";

import SideNav from "./SideNav";

const Menu = () => {
  const [navState, setNavState] = useState(false);
  const history = useHistory();
  return (
    <>
      <Container>
        <Box>
          <Logo />
          <Button onClick={() => history.push("/")}>Modelos</Button>
          <Button>Ficha de modelo</Button>
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
