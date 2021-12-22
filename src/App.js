import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Footer from "./components/Footer/Footer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
    return (
        <>
            <Router>
                <div className="container">
                    <div className="app-wrapper">
                        <Header/>
                        <Navbar/>
                        <div className="app-wrapper-content">
                            <Switch>
                                <Route path="/profile/" render={() => <Profile/>}/>
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