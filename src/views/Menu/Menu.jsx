import React, { useState } from "react";

import { Container, Logo, HamburgerMenu, Box, Button } from "./MenuStyles";

import SideNav from "./SideNav";

const Menu = () => {
  const [navState, setNavState] = useState(false);
  return (
    <>
      <Container>
        <Box>
          <Logo /> 
          <Button>Modelos</Button>
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
