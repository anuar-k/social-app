import React from "react"
import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    // console.log(props)
    return (
        <>
            <header className={classes.Header}>
                <NavLink to={"/"} exact>
                    <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="company"/>
                </NavLink>
                {props.isAuth ? <a>{props.login}</a> : <NavLink to={"/login"}>Login</NavLink>}
            </header>
        </>
    )
}
export default Header