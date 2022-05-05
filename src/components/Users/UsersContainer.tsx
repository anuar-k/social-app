import React, {Fragment} from "react";
import {connect} from "react-redux";
import {follow, unFollow, toggleFollowingInProgress, getUsers} from "../../redux/usersReducer";
import Users from "./Users";
import PreLoader from "../common/PreLoader";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type MapDispatchPropsType = {
    follow: (pageNumber: number) => void
    unFollow: (pageNumber: number) => void
    getUsers: (pageNumber: number, pageSize: number) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
}
type OwnPropsType = {
    pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersAPIComponent extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize);
    }

    onChangePage = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {
        return (
            <Fragment>
                <h2>{this.props.pageTitle}</h2>
                {this.props.isFetching ? <PreLoader/> :
                    <Users
                        users={this.props.users}
                        currentPage={this.props.currentPage}
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        onChangePage={this.onChangePage}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        isFetching={this.props.isFetching}
                        followingInProgress={this.props.followingInProgress}
                    />
                }
            </Fragment>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
(mapStateToProps, {follow, unFollow, toggleFollowingInProgress, getUsers})(UsersAPIComponent);