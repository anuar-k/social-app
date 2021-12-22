const ADD_POST = "ADD_POST"
const UPDATE_POST = "UPDATE_POST"

let initialState = {
    newPostText: "default text",
    posts: [
        {
            id: 1,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, nisi optio quas rerum voluptate. Aut expedita maxime perspiciatis tempore. Aspernatur cum necessitatibus neque sit!\n",
            likesCount: 4
        },
        {
            id: 2,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, nisi optio quas rerum voluptate. Aut expedita maxime perspiciatis tempore. Aspernatur cum necessitatibus neque sit!\n",
            likesCount: 10
        },
        {
            id: 3,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, nisi optio quas rerum voluptate. Aut expedita maxime perspiciatis tempore. Aspernatur cum necessitatibus neque sit!\n",
            likesCount: 5
        },
        {
            id: 4,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, nisi optio quas rerum voluptate. Aut expedita maxime perspiciatis tempore. Aspernatur cum necessitatibus neque sit!\n",
            likesCount: 12
        },
        {
            id: 5,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, nisi optio quas rerum voluptate. Aut expedita maxime perspiciatis tempore. Aspernatur cum necessitatibus neque sit!\n",
            likesCount: 90
        }
    ],
    index: 10
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: state.index, message: state.newPostText, likesCount: 0}],
                index: ++state.index
            }
        case UPDATE_POST:
            return {
                ...state,
                newPostText: action.text
            }
        default :
            return state
    }
}

export const updatePostActionCreator = (newText) => ({type: UPDATE_POST, text: newText})

export const addPostActionCreator = () => ({type: ADD_POST})

export default profilePageReducer
