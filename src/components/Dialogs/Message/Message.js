import React from "react"
import classes from "./Message.module.css"
import {sendMessageActionCreator} from "../../../redux/dialogPageReducer";

const Message = ({messages, dialogId, dispatch}) => {
    const newMessage = React.createRef();

    const sendMessageHandler = () => {
        if (newMessage.current.value) {
            dispatch(sendMessageActionCreator(newMessage.current.value, dialogId - 1))
            newMessage.current.value = ''
        }
    }
    return (
        <div className={classes.Message}>
            {
                messages.map(message => {
                    const messageStyle = {'width': 15 * message.text.length}
                    if (message.sendUser === 1) {
                        return (
                            <div key={message.text.length + "_" + message}
                                 style={messageStyle}
                                 className={classes.my}>
                                <span>{message.text}</span>
                            </div>
                        )
                    } else {
                        return (
                            <div key={message.length + "_" + message}
                                 style={messageStyle}
                                 className={classes.red}>
                                <span> {message.text}</span>
                            </div>
                        )
                    }
                })
            }
            <div>
                <textarea ref={newMessage} name="" id="" cols="80" rows="2"
                          placeholder={"Введите сообщение"}/>
                <button onClick={sendMessageHandler}>SEND</button>
            </div>
        </div>
    )
}
export default Message