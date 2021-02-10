import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./landing/Landing";
import App from "./app/App";

const MainRoute = (): JSX.Element => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/app" component={App} />
          <Route exact path="/counter" component={Counter} />
        </Switch>
    </Router>
  );
};

const Counter = (): JSX.Element => {
  return <h2>Counter</h2>;
};

export default MainRoute;
