import * as React from "react";
import classes from "./Users.module.css"
import {NavLink} from "react-router-dom";

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
                        { user.photos.small === null
                            ? <img style={{"width": 40}}
                                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUhbcBoGQfshS-wrsGVe8egbkz1Ba_aNyHCQ&usqp=CAU"}
                            />
                            :
                            <img style={{"width": 40}} src={user.photos.small} />
                        }

                    </NavLink>
                    <div> { user.followed
                        ?
                            <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => props.unFollow(user.id)}
                            > unFollow </button>
                        :
                            <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => props.follow(user.id)}
                            > follow</button>
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