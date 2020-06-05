import React from "react";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import MainContainer from "./Containers/Main/MainContainer";


export default class Router extends React.Component{

    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/">
                        <MainContainer />
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }

}
