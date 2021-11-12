import React from "react";
import { Container } from "@material-ui/core";

import { BrowserRouter, Routes as Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Navbar from "./components/Navbar/Navbar.js";
import Auth from "./components/Auth/Auth";
const App = () => {
  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/auth" exact element={<Auth />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};
export default App;
