import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Signin from "../components/auth/signin";
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={Signin} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}
