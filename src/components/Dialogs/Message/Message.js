import React from "react"
import classes from "./Message.module.css"

const Message = ({messages, dialogId, onChangeMessage, sendMessage}) => {
    const newMessage = React.createRef();

    const sendMessageHandler = () => {
        if (newMessage.current.value) {
            sendMessage(newMessage.current.value, dialogId - 1)
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
                            <div key={message.text.length + "_" + message.text}
                                 style={messageStyle}
                                 className={classes.my}>
                                <span>{message.text}</span>
                            </div>
                        )
                    } else {
                        return (
                            <div key={message.length + "_" + message.text}
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
                          placeholder="Введите сообщение" onChange={() => onChangeMessage}/>
                <button onClick={sendMessageHandler}>Отправить</button>
            </div>
        </div>
    )
}
export default Message