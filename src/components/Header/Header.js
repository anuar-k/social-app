import React from "react"
import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className={classes.Header}>
                <NavLink to={"/"} exact>
                    <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="company"/>
                </NavLink>
            </header>
        </>
    )
}
export default Header