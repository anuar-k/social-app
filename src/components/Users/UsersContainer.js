import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUserCount,
    setUsers,
    unfollow
} from "../../redux/usersPageReducer";
import axios from "axios";
import Users from "./Users";
import PreLoader from "../common/PreLoader";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?term=Aa&page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
                this.props.setIsFetching(false)
            })
    }
    onChangePage = (pageNumber) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?term=Aa&page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setIsFetching(false)
            })
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pageCount; i++) pages.push(i)
        return (
            <>
                {this.props.isFetching ? <PreLoader/> :
                    <Users
                        pages={pages}
                        users={this.props.users}
                        currentPage={this.props.currentPage}
                        onChangePage={this.onChangePage}
                        setIsFetching={this.setIsFetching}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        isFetching={this.props.isFetching}
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
        isFetching: state.usersPage.isFetching
    }
}
export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUserCount, setIsFetching})(UsersAPIComponent);

