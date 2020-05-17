import React from 'react';
import { Route } from 'react-router-dom'

import styled from "styled-components"

import Home from "./Home/Home"
import DataSheet from "./DataSheet/DataSheet"
import Menu from "./Menu/Menu"

const Footer = styled.footer`
display:block;
background: #000000;
height: 6.9vh;
width:100%;


`
function App() {
  return (
    <>
      <Menu />
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={DataSheet} />
      <Footer />
    </>
  );
}

export default App;
