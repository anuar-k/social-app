import React, {FC} from "react";
import User from "./User";
import Paginator from "../common/Paginator/Paginator";
import {UserType} from "../../types/types";
import classes from "./Users.module.css"

type Props = {
    currentPage: number
    totalUsersCount: number
    pageSize: number
    portionSize?: number
    users: Array<UserType>
    followingInProgress: Array<number>
    onChangePage: (pageNumber: number) => void
    follow: (pageNumber: number) => void
    unFollow: (pageNumber: number) => void
    isFetching: boolean
}
const Users: FC<Props> = (props) => {
    return (
        <>
            <Paginator currentPage={props.currentPage}
                       onChangePage={props.onChangePage}
                       totalItemsCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       portionSize={23}
            />
            <div className={classes.Users}>
                {props.users.map(user =>
                    <User key={user.id} user={user}
                          followingInProgress={props.followingInProgress}
                          unFollow={props.unFollow}
                          follow={props.follow}
                    />)
                }
            </div>
        </>
    )
}

export default Users