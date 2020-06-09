import React from "react";
import style from "./Main.module.scss"
import {
    Switch,
    Route
} from "react-router-dom";
import ScreensContainer from "../Screens/ScreensContainer";
import Header from "../Header/Header";
import LeftMenu from "../../Components/LeftMenu/LeftMenu";
import {worlds} from "../../Utils/localization";

export default class Main extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        worlds.setLanguage('ru')
    }

    render() {
        return(
            <div className={style.main}>
                <Header/>
                <div className={style.content}>
                    <LeftMenu/>
                    <Switch>
                        <Route exact={true} path="/">
                            <ScreensContainer />
                        </Route>
                    </Switch>
                </div>
            </div>
        )
    }
}
