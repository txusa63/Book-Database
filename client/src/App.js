import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import {Homepage} from "./components/Homepage";
import {Header} from './components/Header';
import { Favorites } from './components/Favorites';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{textAlign: "center"}}>
        <Route path="/" exact >
          <Homepage />
        </Route>
        <Route path='/favorites'>
          <Favorites />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
