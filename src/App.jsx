import React from "react";
import { Redirect, Route, Switch } from "react-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Flower from "./Flower";
import Waterfall from "./Waterfall";
import Saven from "./Saven";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Saven" component={Saven} />
        <Route exact path="/Flower" component={Flower} />
        <Route exact path="/Waterfall" component={Waterfall} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
