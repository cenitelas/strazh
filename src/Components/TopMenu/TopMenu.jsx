import React from "react";
import style from "./TopMenu.module.scss"
import ButtonTopMenu from "../Buttons/ButtonTopMenu";

export default class TopClass extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={style.topMenu}>
                <ButtonTopMenu caption={"Экраны"}/>
                <ButtonTopMenu caption={"Устройства"}/>
                <ButtonTopMenu caption={"тревожные события"}/>
                <ButtonTopMenu caption={"Менеджер загрузок"}/>
                <ButtonTopMenu caption={"Диск менеджер"}/>
                <ButtonTopMenu caption={"логи"}/>
                <ButtonTopMenu caption={"Настройки"}/>
            </div>
        )
    }
}
