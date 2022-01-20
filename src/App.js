import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Footer from "./components/Footer/Footer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

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
                                <Route path="/profile/:profileId?" render={() => <ProfileContainer />}/>
                                <Route path="/dialogs/" render={() => <DialogsContainer/>}/>
                                <Route path="/users/" render={() => <UsersContainer/>}/>
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