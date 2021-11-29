import React from "react"
import sea from "../Sea_panorama_-_panoramio.jpg"
import classes from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    return (
        <>
            <div className={classes.ProfileInfo}>
                <img
                    src={sea}
                    alt="sea"/>
                AVA + desc
            </div>
        </>
    )
}
export default ProfileInfo