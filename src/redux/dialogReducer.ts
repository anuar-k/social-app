const SEND_MESSAGE = "dialog/SEND_MESSAGE"
const UPDATE_MESSAGE = "dialog/UPDATE_MESSAGE"

type MessageType = {
    messageId: number | null,
    sendUser: number | null,
    text: string,
    timestamp: string
}

type DialogType = {
    id: number | null,
    name: string,
    messages: Array<MessageType>
}

const initialState = {
    newMessage: '' as string,
    newMessageIDSeq: 100 as number,
    dialogs: [
        {
            id: 1,
            name: 'Dimych',
            messages: [
                {
                    messageId: 11, sendUser: 1, text: "reprehenderit ", timestamp: ""
                },
                {
                    messageId: 12, sendUser: 2, text: "reprehenderit velit vero. Culpa, natu", timestamp: ""
                },
                {
                    messageId: 14,
                    sendUser: 1,
                    text: "Lorem ipsum dolor sit amet, consectetur adem eaque fuga itaque laborum mollitia, n",
                    timestamp: ""
                },
                {
                    messageId: 12,
                    sendUser: 2,
                    text: "Lorem ipsum dolor sit amet,. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                    timestamp: ""
                },
                {
                    messageId: 13,
                    sendUser: 1,
                    text: "reprehenderit velit vero. Culpa, natus, quis!",
                    timestamp: ""
                },
            ] as Array<MessageType>
        },
        {
            id: 2, name: 'Andrey',
            messages: [
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
            ] as Array<MessageType>
        },
        {
            id: 3, name: 'Sveta',
            messages: [
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
            ] as Array<MessageType>
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
            ] as Array<MessageType>
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
            ] as Array<MessageType>
        }
    ] as Array<DialogType>
}

export type InitialStateType = typeof initialState

const dialogReducer = (state = initialState, action: any):InitialStateType => {
    switch (action.type) {
        case UPDATE_MESSAGE:
            return {
                ...state,
                newMessage: action.message
            }
        case SEND_MESSAGE: {
            const newState = {...state}
            newState.dialogs = [...state.dialogs]

            newState.dialogs[action.dialogId].messages.push({
                messageId: ++state.newMessageIDSeq,
                sendUser: action.sendUser,
                text: action.newMassage,
                timestamp: ""
            });
            return newState;
        }
        default:
            return state;
    }
}
type sendMessageActionCreatorType = {
    type: string
    newMassage: string,
    dialogId: number,
    sendUser: 1
}
export const sendMessageActionCreator = (newMassage: string, dialogId: number): sendMessageActionCreatorType => {
    return {
        type: SEND_MESSAGE,
        newMassage: newMassage,
        dialogId: dialogId,
        sendUser: 1
    }
}

export const updateMessageActionCreator = (newMassage: string) => {
    return {
        type: UPDATE_MESSAGE,
        message: newMassage,
    }
}

export default dialogReducer