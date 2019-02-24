import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            {/* <Redirect from="/" to="/home" /> */}
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}
