import * as React from "react";
import classes from "./Users.module.css"
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {
    return (
        <>{/*pages list*/}
            <div className={classes.Users}>
                {props.pages.map(page => {
                    return (
                        <span className={props.currentPage === page && classes.activePage}
                              onClick={(e) => props.onChangePage(page)}
                              key={page + Math.random() * 1.2}> {page}
                            </span>
                    )
                })
                }
            </div>
        {/*users list*/}
            {props.users.map(user =>
                <div key={user.id + Math.random() * 10}>
                    <NavLink to={"/profile/" + user.id}>
                        <img
                            style={{"width": 40}}
                            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUhbcBoGQfshS-wrsGVe8egbkz1Ba_aNyHCQ&usqp=CAU"}
                        />
                    </NavLink>
                    <div>  {
                        user.followed ?
                            <button  disabled={props.followingInProgress.some(id => id ===user.id)}  onClick={() => {
                                props.toggleFollowingInProgress(true)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,  {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "5b25a2dd-cfbb-4e37-8bf1-24b94943c959"
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(user.id)
                                    }
                                })
                                props.toggleFollowingInProgress(false)
                            }}
                            > unFollow
                            </button> :
                            <button disabled={props.followingInProgress.some(id => id ===user.id)} onClick={() => {
                                props.toggleFollowingInProgress(true)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "5b25a2dd-cfbb-4e37-8bf1-24b94943c959"
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(user.id)
                                    }
                                })
                                props.toggleFollowingInProgress(false)
                            }}>follow</button>
                    }
                    </div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                    <div>{"user.location.city"}</div>
                    <div>{"user.location.country"}</div>
                </div>)
            }
        </>
    )
}

export default Users