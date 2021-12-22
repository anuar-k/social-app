import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {sendMessageActionCreator, updateMessageActionCreator,} from "../../redux/dialogPageReducer";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogs
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeMessage: (message) => {
            dispatch(updateMessageActionCreator(message))
        },
        sendMessage: (newMassage, dialogId) => {
            dispatch(sendMessageActionCreator(newMassage, dialogId))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer