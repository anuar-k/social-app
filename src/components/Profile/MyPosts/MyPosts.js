import React from "react"
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPost = ({posts, newPostText, onPostChange, addPostHandler}) => {
    const newPostElement = React.createRef();

    let postElements = posts.map((item, index) => {
        return (
            <Post
                key={index}
                number={item.id}
                likeCount={item.likesCount}
                message={item.message}
            />
        )
    });
    return (
        <>
            <div className={classes.MyPosts}>
                My posts
                <div>
                    <textarea name="postBody" id="a" cols="111" rows="2"
                              onChange={() => onPostChange(newPostElement.current.value)}
                              ref={newPostElement}
                              value={newPostText}
                    />
                    <button onClick={addPostHandler}>Добавить</button>
                </div>
                {postElements}
            </div>
        </>
    )
}
export default MyPost