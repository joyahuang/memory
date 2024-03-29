import React from "react";
import { Container } from "@material-ui/core";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Navbar from "./components/Navbar/Navbar.js";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails.js";
const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <BrowserRouter>
      <Container maxwidth="xl">
        <Navbar></Navbar>
        <Switch>
          <Route
            path="/"
            exact
            component={() => <Redirect to="/posts" />}
          ></Route>
          <Route path="/posts" exact component={Home}></Route>
          <Route path="/posts/search" exact component={Home}></Route>
          <Route path="/posts/:id" exact component={PostDetails}></Route>
          <Route
            path="/auth"
            exact
            component={() => (!user ? <Auth /> : <Redirect to="/posts/" />)}
          ></Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};
export default App;
