import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./login";
import Dashboard from "./dashboard";
import Itinerary from "./itinerary";
import Location from "./location";

const Root = () => {
  return (
    <>
      <Switch>
        <Route component={Login} exact path="/" />
        <Route component={Dashboard} exact path="/dashboard" />
        <Route component={Itinerary} exact path="/itinerary" />
        <Route component={Location} exact path="/location" />
      </Switch>
    </>
  );
};

export default Root;
