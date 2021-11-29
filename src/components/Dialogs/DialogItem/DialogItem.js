import React from "react";
import {NavLink} from "react-router-dom";
import classes from './DialogItem.module.css'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={classes.DialogItem}>
            <NavLink to={path} activeClassName={classes.dialog + " " + classes.active}>
                {props.name}
            </NavLink>
        </div>
    )
}
export default DialogItem