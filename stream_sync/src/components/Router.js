import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Host from "./Host";
import Party from "./Party";
import Join from "./Join";
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/host" component={Host} />
      <Route exact path="/join" component={Join} />
      <Route exact path="/party" component={Host} />
      <Route exact path="/party/:host_id" component={Party} />
    </Switch>
  </BrowserRouter>
);
export default Router;
