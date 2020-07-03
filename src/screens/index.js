import React from 'react';
import { Route, Switch } from "react-router-dom";


import Login from "./login";
import Dashboard from "./dashboard";
import Itinerary from "./itinerary";

const Root = () => {
    return (
        <>
            <Switch>
                <Route component={Login} exact path="/"/>
                <Route component={Dashboard} exact path="/dashboard"/>
                <Route component={Itinerary} exact path="/itinerary"/>
            </Switch>
        </>
    )
}

export default Root;