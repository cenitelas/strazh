import React from 'react';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import style from "./MenuCamTree.module.scss"
import ButtonCamControl from "../Buttons/ButtonCamControl/ButtonCamControl";
import trash from "../../Assets/icons/trash.svg"
import edit from "../../Assets/icons/edit.svg"
import {worlds} from "../../Utils/localization";

export default function MenuCamTree() {

    return (
        <PopupState variant="popover">
            {(popupState) => (
                <div className={style.menuCamTree}>
                    <div className={style.button} {...bindTrigger(popupState)}></div>
                    <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'start',
                        }}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'start',
                        }}
                        PaperProps = {{
                            className:style.menu
                        }}
                    >
                                <ButtonCamControl icon={edit} caption={worlds.edit}/>
                                <ButtonCamControl icon={trash} caption={worlds.trash}/>
                    </Popover>
                </div>
            )}
        </PopupState>
    );
}
