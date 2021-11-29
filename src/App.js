import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Footer from "./components/Footer/Footer";

const App = ({state, dispatch}) => {
    return (
        <>
            <Router>
                <div className="container">
                    <div className="app-wrapper">
                        <Header/>
                        <Navbar/>
                        <div className="app-wrapper-content">
                            <Switch>
                                <Route path="/profile/" render={() =>
                                    <Profile
                                        posts={state.profilePage.posts}
                                        newPostText={state.profilePage.newPostText}
                                        dispatch={dispatch}
                                    />
                                }/>
                                <Route path="/dialogs/" render={() =>
                                    <Dialogs
                                        dialogs={state.dialogPage.dialogs}
                                        dispatch={dispatch}
                                    />
                                }/>
                            </Switch>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </Router>
        </>
    );
}

export default App;