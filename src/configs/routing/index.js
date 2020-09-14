import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Pages
import { Home, Login } from "pages";

const Routing = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routing;
