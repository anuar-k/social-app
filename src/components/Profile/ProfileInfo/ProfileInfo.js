import React from "react"
import sea from "../Sea_panorama_-_panoramio.jpg"
import classes from "./ProfileInfo.module.css"
import PreLoader from "../../common/PreLoader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <PreLoader/>
    }

    return (
        <>
            <div className={classes.ProfileInfo}>
                <img src={sea} alt="sea"/> <br/>
                <span> {props.profile.fullName}</span>
                <ProfileStatus {...props} />
                <span>
                    <img style={{"width": 80}} src={props.profile.photos.large} alt=""/>
                </span>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam asperiores delectus dolorem ea, error esse est exercitationem, explicabo inventore iste molestias nobis numquam praesentium ratione reprehenderit, tempora totam vitae!
                </span>
            </div>
        </>
    )
}
export default ProfileInfo