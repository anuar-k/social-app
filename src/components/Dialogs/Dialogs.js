import React from "react";
import classes from "./Dialogs.module.css"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = ({dialogs, dispatch}) => {

    return (
        <Router>
            <div className={classes.Dialogs}>
                <div className={classes.dialogItems}>
                    {
                        dialogs.map((item, index) =>
                            <DialogItem
                                key={index }
                                id={item.id}
                                name={item.name}
                            />
                        )}
                </div>

                <Switch>
                    <Route path={"/dialogs/:id"} render={(props) =>
                        <>
                            <Message
                                key={props.match.params.id }
                                messages={dialogs[props.match.params.id - 1].messages}
                                dispatch={dispatch}
                                dialogId={props.match.params.id}
                            />
                        </>
                    }/>
                    {/*<Route exact path={"/dialogs/"} render={() =>*/}
                    {/*    <div style={{"margin": "0 auto", 'padding':80, "fontSize": 18, "color": "#fff"}}>*/}
                    {/*        Выберите один из {dialogs.length} чатов*/}
                    {/*    </div>*/}
                    {/*}/>*/}
                </Switch>
            </div>
        </Router>
    )
}

export default Dialogs;