import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Host from "./Host";


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/host" component={Host} />
      {/* <Route exact path="/article/:article" component={ArticlePage} /> */}
    </Switch>
  </BrowserRouter>
);
export default Router;
