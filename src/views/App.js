import React from 'react';
import { Route } from 'react-router-dom'

import Home from "./Home/Home"
import DataSheet from "./DataSheet/DataSheet"
import Menu from "./Menu/Menu"

function App() {
  return (
    <div>
      <Menu/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/:id" component={DataSheet}/>
    </div>
  );
}

export default App;
