import React from "react"
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profilePageReducer";

const MyPost = ({posts, newPostText, dispatch}) => {
    const text = React.createRef();

    const addPostHandler = () => {
        if (text.current.value.trim()) {
            dispatch(addPostActionCreator());
            // text.current.value.trim())
            dispatch(updatePostActionCreator())
        }
    }
    const onPostChange = (e) => {
        dispatch({type: "UPDATE_POST", text: e.target.value})
    }
    return (
        <>
            <div className={classes.MyPosts}>
                My posts
                <div>
                    <textarea name="a" id="a" cols="111" rows="2"
                              onChange={onPostChange}
                              ref={text}
                              value={newPostText}
                    />
                    <button onClick={addPostHandler}>Добавить</button>
                </div>
                {
                    posts.map((item, index) => {
                        return (
                            <Post
                                key={index}
                                number={item.id}
                                likeCount={item.likesCount}
                                message={item.message}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}
export default MyPost