import React from "react"
import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const styles = [classes.Navbar]
    return (
        <div className={styles.join(' ')}>
            <div><NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink></div>
            <div><NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink></div>
            <div><NavLink to="/news" activeClassName={classes.active}>News</NavLink></div>
            <div><NavLink to="/music" activeClassName={classes.active}>Music</NavLink></div>
            <div><NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink></div>
        </div>
    )
}
export default Navbar