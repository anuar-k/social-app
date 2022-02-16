import React from "react"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <>
            <ProfileInfo
                {...props}
                // profile={props.profile}
                // status={props.status}
            />
            <MyPostContainer {...props}/>
        </>
    )
}
export default Profile