import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import AddBooks from "./components/AddBooks";
import OwnedBooks from "./components/OwnedBooks";
import WantedBooks from "./components/WantedBooks";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar/>
        <Route path="/" exact component={Homepage}/>
        <Route path="/addbooks" component={AddBooks}/>
        <Route path="/ownedbooks" component={OwnedBooks}/>
        <Route path="/wantedbooks" component={WantedBooks}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
