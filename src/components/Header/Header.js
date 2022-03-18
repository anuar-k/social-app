import React from "react"
import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <>
            <header className={classes.Header}>
                <NavLink to={"/"} exact>
                    <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="company"/>
                </NavLink>
                {props.isAuth
                    ? <div>

                        {props.login}
                        <button onClick={() => props.logout()}>logout</button>
                    </div>
                    : <NavLink to={"/login"}>Login</NavLink>}
            </header>
        </>
    )
}
export default Header