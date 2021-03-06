import React from "react"
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (<>
            {
                <Header {...this.props} />
            }
        </>)
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer)