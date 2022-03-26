import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Input} from "../common/FormsControls/FormControls";
import {required} from "../../util/validators";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import classes from "./../common/FormsControls/FormControls.module.css"
import style from "./Login.module.css"
import Button from "../common/Button/Button";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field
                validate={[required]}
                placeholder={"email"}
                name={"email"}
                component={Input}
            />
            <br/>
            <Field
                validate={[required]}
                placeholder={"password"}
                name={"password"}
                component={Input}
                type={'password'}
            />
            <br/>
            <Field
                name={"rememberMe"}
                component={Input}
                type={"checkbox"}
            /> remember me
            <br/>
            <div>
                {error && <span className={classes.error}>{error}</span>}
            </div>
            <Button>Login</Button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        const {email, password, rememberMe} = formData
        props.login(email, password, rememberMe)

    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div className={style.loginForm}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {login})(Login)