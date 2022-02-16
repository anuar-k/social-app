import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Footer from "./components/Footer/Footer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";

const App = () => {
    return (
        <>
            <Router>
                <div className="container">
                    <div className="app-wrapper">
                        <HeaderContainer/>
                        <Navbar/>
                        <div className="app-wrapper-content">
                            <Switch>
                                <Route exact path="/profile/:profileId?" render={() => <ProfileContainer />}/>
                                <Route path="/dialogs/" render={() => <DialogsContainer/>}/>
                                <Route path="/users/" render={() => <UsersContainer/>}/>
                                <Route path="/login/" render={() => <Login/>}/>
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