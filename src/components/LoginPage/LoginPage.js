import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { login } from "../../actions/actions";
import axios from "axios";
import "./LoginPage.css"

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            emailInput: "",
            passwordInput: "",
            isAuth: false,
            hasError: false,
            rememberUser: false
        };
        localStorage.removeItem("token");
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.rememberMe = this.rememberMe.bind(this);
    };
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value,
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        const { emailInput, passwordInput } = this.state;
        const user = {
            email: emailInput,
            password: passwordInput,
            token: "",
        };
        axios
            .post("http://localhost:3001/api/v1/user/login", user)
            .then((response) => {
                this.props.login(emailInput, passwordInput, response.data.body.token);
                console.log(this.state.rememberUser)
                if(this.state.rememberUser) {localStorage.setItem("token",response.data.body.token)};
                this.setState({ isAuth: true, hasError: false });
            })
            .catch((error) => {
                console.log(error);
                this.setState({ hasError: true });
            });
    }

    rememberMe (event) {
        console.log(!this.state.rememberUser)
        if (!event.checked) {
            this.setState({
                rememberUser: false
            })
        } else {
            this.setState({
                rememberUser: true
            })
        }
    }

    render() {
        if (this.state.isAuth) return <Redirect to="/profile" />;

        return (
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <span className="fa fa-user-circle sign-in-icon"></span>
                    <h1>Sign In</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="emailInput"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="passwordInput"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div
                            className={
                                this.state.hasError ? "sign-in-msg error" : "sign-in-msg"
                            }
                        >
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" onChange={this.rememberMe} />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <input type="submit" className="sign-in-button" value="Sign in" />
                    </form>
                </section>
            </main>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            login,
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
