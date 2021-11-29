import dialogPageReducer from "./dialogPageReducer";
import profilePageReducer from "./profilePageReducer";

const store = {
    _state: {
        profilePage: {
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
            ]
        },
        dialogPage: {
            dialogs: [
                {
                    id: 1, name: 'Dimych', messages: [
                        {
                            messageId: 11, sendUser: 1, text: "reprehenderit ", timestamp: ""
                        },
                        {
                            messageId: 12, sendUser: 2, text: "reprehenderit velit vero. Culpa, natu", timestamp: ""
                        },
                        {
                            messageId: 14,
                            sendUser: 1,
                            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                            timestamp: ""
                        },
                        {
                            messageId: 12,
                            sendUser: 2,
                            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                            timestamp: ""
                        },
                        {
                            messageId: 13,
                            sendUser: 1,
                            text: "reprehenderit velit vero. Culpa, natus, quis!",
                            timestamp: ""
                        },
                    ]
                },
                {
                    id: 2, name: 'Andrey', messages: [
                        {
                            messageId: 21,
                            sendUser: 1,
                            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                            timestamp: ""
                        },
                        {
                            messageId: 22, sendUser: 3, text: "Culpa, natus, quis!", timestamp: ""
                        },
                        {
                            messageId: 23,
                            sendUser: 3,
                            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                            timestamp: ""
                        },
                        {
                            messageId: 24,
                            sendUser: 1,
                            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                            timestamp: ""
                        },
                        {
                            messageId: 12,
                            sendUser: 2,
                            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                            timestamp: ""
                        },
                        {
                            messageId: 13,
                            sendUser: 1,
                            text: "reprehenderit velit vero. Culpa, natus, quis!",
                            timestamp: ""
                        },
                    ]
                },
                {
                    id: 3, name: 'Sveta', messages: [
                        {
                            messageId: 12,
                            sendUser: 1,
                            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                            timestamp: ""
                        },
                        {
                            messageId: 12,
                            sendUser: 2,
                            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                            timestamp: ""
                        },
                        {
                            messageId: 13,
                            sendUser: 1,
                            text: "reprehenderit velit vero. Culpa, natus, quis!",
                            timestamp: ""
                        },
                        {
                            messageId: 23,
                            sendUser: 5,
                            text: "sunt? Dolore, dolores maiores maxime molestiae placeat quaerat",
                            timestamp: ""
                        },
                        {
                            messageId: 24, sendUser: 1, text: "reprehenderit", timestamp: ""
                        },
                        {
                            messageId: 12,
                            sendUser: 2,
                            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                            timestamp: ""
                        },
                        {
                            messageId: 13,
                            sendUser: 1,
                            text: "reprehenderit velit vero. Culpa, natus, quis!",
                            timestamp: ""
                        },
                        {
                            messageId: 12,
                            sendUser: 2,
                            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                            timestamp: ""
                        },
                        {
                            messageId: 13,
                            sendUser: 1,
                            text: "reprehenderit velit vero. Culpa, natus, quis!",
                            timestamp: ""
                        },
                        {
                            messageId: 21,
                            sendUser: 1,
                            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                            timestamp: ""
                        },
                        {
                            messageId: 22, sendUser: 4, text: "molestiae", timestamp: ""
                        },
                        {
                            messageId: 23, sendUser: 4, text: "s dolorem eaque fuga itaq", timestamp: ""
                        },
                        {
                            messageId: 24, sendUser: 1, text: "s dolorem eaque fuga itaq", timestamp: ""
                        },
                    ]
                },
                {
                    id: 4,
                    name: 'Vika',
                    messages: [
                        {
                            messageId: 12, sendUser: 1, text: "s dolorem eaque fuga itaq", timestamp: ""
                        },
                        {
                            messageId: 13,
                            sendUser: 5,
                            text: "reprehenderit velit vero. Culpa, natus, quis!",
                            timestamp: ""
                        },
                        {
                            messageId: 21, sendUser: 1, text: "s dolorem eaque fuga itaq", timestamp: ""
                        },
                        {
                            messageId: 22, sendUser: 5, text: "s dolorem eaque fuga itaq", timestamp: ""
                        },
                        {
                            messageId: 23, sendUser: 1, text: "s dolorem eaque fuga itaq!", timestamp: ""
                        },
                        {
                            messageId: 24, sendUser: 5, text: "s dolorem eaque fuga itaq", timestamp: ""
                        },
                    ]
                },
                {
                    id: 5,
                    name: 'Valera',
                    messages: [
                        {
                            messageId: 21, sendUser: 1, text: "Lorem ipsum dolor? ", timestamp: ""
                        },
                        {
                            messageId: 22, sendUser: 5, text: "sit amet", timestamp: ""
                        },
                        {
                            messageId: 12, sendUser: 2, text: "s dolorem eaque fuga itaq", timestamp: ""
                        },
                        {
                            messageId: 13,
                            sendUser: 1,
                            text: "reprehenderit velit vero. Culpa, natus, quis!",
                            timestamp: ""
                        },
                        {
                            messageId: 23,
                            sendUser: 5,
                            text: "sunt? Dolore, dolores maiores maxime molestiae placeat quaerat",
                            timestamp: ""
                        },
                        {
                            messageId: 24, sendUser: 1, text: "reprehenderit", timestamp: ""
                        },
                        {
                            messageId: 12,
                            sendUser: 2,
                            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                            timestamp: ""
                        },
                        {
                            messageId: 13,
                            sendUser: 1,
                            text: "reprehenderit velit vero. Culpa, natus, quis!",
                            timestamp: ""
                        },
                        {
                            messageId: 12,
                            sendUser: 2,
                            text: "elit. Corporis dolorem eaque fuga itaque laborum mollitia, ",
                            timestamp: ""
                        },
                        {
                            messageId: 13,
                            sendUser: 1,
                            text: "reprehenderit velit vero. Culpa, natus, quis!",
                            timestamp: ""
                        },
                        {
                            messageId: 23,
                            sendUser: 5,
                            text: "sunt? Dolore, dolores maiores maxime molestiae placeat quaerat",
                            timestamp: ""
                        },
                        {
                            messageId: 24, sendUser: 1, text: "reprehenderit", timestamp: ""
                        },
                        {
                            messageId: 12,
                            sendUser: 2,
                            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                            timestamp: ""
                        },
                        {
                            messageId: 13,
                            sendUser: 1,
                            text: "reprehenderit velit vero. Culpa, natus, quis!",
                            timestamp: ""
                        },
                        {
                            messageId: 13,
                            sendUser: 1,
                            text: "reprehenderit velit vero. Culpa, natus, quis!",
                            timestamp: ""
                        },
                        {
                            messageId: 23,
                            sendUser: 5,
                            text: "sunt? Dolore, dolores maiores maxime molestiae placeat quaerat",
                            timestamp: ""
                        },
                        {
                            messageId: 24, sendUser: 1, text: "reprehenderit", timestamp: ""
                        },
                        {
                            messageId: 12,
                            sendUser: 2,
                            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                            timestamp: ""
                        },
                        {
                            messageId: 13,
                            sendUser: 1,
                            text: "reprehenderit velit vero. Culpa, natus, quis!",
                            timestamp: ""
                        },
                        {
                            messageId: 12,
                            sendUser: 2,
                            text: "elit. Corporis dolorem eaque fuga itaque laborum mollitia, ",
                            timestamp: ""
                        },
                        {
                            messageId: 13,
                            sendUser: 1,
                            text: "reprehenderit velit vero. Culpa, natus, quis!",
                            timestamp: ""
                        },
                        {
                            messageId: 23,
                            sendUser: 5,
                            text: "sunt? Dolore, dolores maiores maxime molestiae placeat quaerat",
                            timestamp: ""
                        },
                        {
                            messageId: 24, sendUser: 1, text: "reprehenderit", timestamp: ""
                        },
                        {
                            messageId: 12,
                            sendUser: 2,
                            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                            timestamp: ""
                        },
                        {
                            messageId: 13,
                            sendUser: 1,
                            text: "reprehenderit velit vero. Culpa, natus, quis!",
                            timestamp: ""
                        },
                        {
                            messageId: 13,
                            sendUser: 1,
                            text: "reprehenderit velit vero. Culpa, natus, quis!",
                            timestamp: ""
                        },
                        {
                            messageId: 23,
                            sendUser: 5,
                            text: "sunt? Dolore, dolores maiores maxime molestiae placeat quaerat",
                            timestamp: ""
                        },
                        {
                            messageId: 24, sendUser: 1, text: "reprehenderit", timestamp: ""
                        },
                        {
                            messageId: 12,
                            sendUser: 2,
                            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                            timestamp: ""
                        },
                        {
                            messageId: 13,
                            sendUser: 1,
                            text: "reprehenderit velit vero. Culpa, natus, quis!",
                            timestamp: ""
                        },
                        {
                            messageId: 12,
                            sendUser: 2,
                            text: "elit. Corporis dolorem eaque fuga itaque laborum mollitia, ",
                            timestamp: ""
                        },
                        {
                            messageId: 13,
                            sendUser: 1,
                            text: "reprehenderit velit vero. Culpa, natus, quis!",
                            timestamp: ""
                        },
                        {
                            messageId: 23,
                            sendUser: 5,
                            text: "sunt? Dolore, dolores maiores maxime molestiae placeat quaerat",
                            timestamp: ""
                        },
                        {
                            messageId: 24, sendUser: 1, text: "reprehenderit", timestamp: ""
                        },
                        {
                            messageId: 12,
                            sendUser: 2,
                            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                            timestamp: ""
                        },
                        {
                            messageId: 13,
                            sendUser: 1,
                            text: "reprehenderit velit vero. Culpa, natus, quis!",
                            timestamp: ""
                        },
                    ]
                }
            ],
            index: 6,
        },
    },
    setState(state) {
        this._state = state
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log("fix")
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogPageReducer(this._state.dialogPage, action)
        // if (action.TYPE === ADD_POST) {
        //     const newPost = {
        //         id: this._state.index,
        //         message: this._state.profilePage.newPostText,
        //         likesCount: 0
        //     }
        //     if (this._state.profilePage.newPostText) {
        //         this._state.profilePage.posts.push(newPost)
        //         ++this._state.index
        //     }
        //     this._callSubscriber(this._state)
        // }
        // if (action.TYPE === UPDATE_POST) {
        //     this._state.profilePage.newPostText = action.text
        //     this._callSubscriber(this._state)
        // }
        // if (action.TYPE === SEND_MESSAGE) {
        //     let length = this._state.dialogPage.dialogs[action.dialogId].messages.length - 1;
        //     this._state.dialogPage.dialogs[action.dialogId].messages.push({
        //         messageId: ++this._state.dialogPage.dialogs[action.dialogId].messages[length].messageId,
        //         sendUser: action.sendUser,
        //         text: action.newMassage,
        //         timestamp: ""
        //     })
        // }
        this._callSubscriber(this._state)
    },
}

export default store