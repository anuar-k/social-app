import React from "react"
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setProfile} from "../../redux/profilePageReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        console.log(this.props)
        let profileId = this.props.match.params.profileId
        if (!profileId) profileId = 2
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + profileId)
            .then(response => {
                this.props.setProfile(response.data)
            })
    }

    render() {
        return (
            <>
                <Profile {...this.props} profile={this.props.profile}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setProfile})(withUrlDataContainerComponent)