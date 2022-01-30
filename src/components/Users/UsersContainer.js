import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUserCount,
    setUsers,
    unfollow,
    toggleFollowingInProgress
} from "../../redux/usersPageReducer";
import Users from "./Users";
import PreLoader from "../common/PreLoader";
import {getUsers} from "../../api/api";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.setTotalUserCount(data.totalCount)
            this.props.setIsFetching(false)
        })
    }

    onChangePage = (pageNumber) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.setIsFetching(false)
        })
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pageCount; i++) pages.push(i)
        return (
            <>
                {
                    this.props.isFetching ? <PreLoader/> :
                    <Users
                        pages={pages}
                        users={this.props.users}
                        currentPage={this.props.currentPage}
                        onChangePage={this.onChangePage}
                        setIsFetching={this.setIsFetching}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        isFetching={this.props.isFetching}
                        followingInProgress={this.props.followingInProgress}
                        toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                    />
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUserCount, setIsFetching,toggleFollowingInProgress})(UsersAPIComponent);

