import React from "react"
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus,updateStatus} from "../../redux/profilePageReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        // console.log(this.props)
        let profileId = this.props.match.params.profileId
        if (!profileId) profileId = 21762
        this.props.getProfile(profileId);
        this.props.getStatus(profileId);
    }
    render() {
        return (
            <>
                <Profile {...this.props}
                         // profile={this.props.profile}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
                        connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
                        withAuthRedirect,
                        withRouter)(ProfileContainer)