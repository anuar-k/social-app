import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./User.module.css"

const User = ({user, ...props}) => {
    return (
        <div key={user.id + Math.random() * 10} className={classes.User}>
            <div>
                <div >
                    <NavLink to={"/profile/" + user.id}>
                        {user.photos.small === null
                            ? <img style={{"width": 40}}
                                   src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUhbcBoGQfshS-wrsGVe8egbkz1Ba_aNyHCQ&usqp=CAU"}
                            />
                            :
                            <img style={{"width": 40}} src={user.photos.small}/>
                        }
                    </NavLink>
                    <br/>
                    {user.followed
                        ?
                        <button disabled={props.followingInProgress.some(id => id === user.id)}
                                onClick={() => props.unFollow(user.id)}
                        > unFollow </button>
                        :
                        <button disabled={props.followingInProgress.some(id => id === user.id)}
                                onClick={() => props.follow(user.id)}
                        > follow</button>
                    }
                </div>
                <div>
                    <span>{user.name}</span><br/>
                    <span>{user.status}</span>
                </div>
            </div>
        </div>
    )
}

export default User