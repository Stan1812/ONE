import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./container/IndexPage";
import DetailPage from "./routes/DetailPage";
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/detail" exact component={DetailPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
