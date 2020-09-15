import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Pages
import { Home, Login, Activity, Sell } from "pages";

const Routing = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/activity" component={Activity} />
        <Route path="/sell" component={Sell} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routing;
