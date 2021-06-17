import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { accounts } from "../../assets/Data";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { editProfile } from "../../actions/actions";
import { isEdit } from "../../actions/actions";
import {store} from "../../store";
import axios from "axios";
import "./ProfilePage.css";
import Accounts from "./Accounts";

class ProfilePage extends Component {
    constructor() {
        super();
        this.state = {
            firstnameInput: "",
            lastnameInput: "",
            isRedirect: false,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this)
    }

    componentDidMount() {
        console.log("######", this.props.user.token);
        const token = this.props.user.token !== "" ?  this.props.user.token : localStorage.getItem("token");
        axios
            .post(
                "http://localhost:3001/api/v1/user/profile",
                {},
                { headers: { Authorization: `Bearer ${token}` } }
            )
            .then((response) => {
                const { firstName, lastName } = response.data.body;
                this.props.editProfile(firstName, lastName);
                console.log(".....", firstName, lastName)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { firstnameInput, lastnameInput } = this.state;
        const token = this.props.user.token;

        const data = {
            firstName: firstnameInput,
            lastName: lastnameInput,
        };

        axios
            .put("http://localhost:3001/api/v1/user/profile", data, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => {
                this.props.editProfile(firstnameInput, lastnameInput);
            })
            .catch((error) => console.log(error));
    }

    handleCancel() {
        this.setState({isRedirect: true})
        this.props.isEdit(false, store.getState().session.email, store.getState().session.firstName, store.getState().session.lastName, store.getState().session.token)
    }

    render() {
        const { firstName, lastName, logStatus} = this.props.user;
        console.log("token", localStorage.getItem('token'))
        if (!logStatus){
            if (localStorage.getItem("token") === null) return <Redirect to="/login" />;
        }

        return (
            <main className="main bg-dark">
                <header className="header">
                    <h2>
                        Welcome back<br/>
                        <span className="header-name">{`${firstName}!`}</span>
                    </h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="header-form-group">
                            <label className="sr-only" htmlFor="firstname">
                                Firstname
                            </label>
                            <input
                                type="text"
                                id="firstname"
                                placeholder={firstName}
                                name="firstnameInput"
                                onChange={this.handleInputChange}
                            />
                            <label className="sr-only" htmlFor="lastname">
                                Lastname
                            </label>
                            <input
                                type="text"
                                id="lastname"
                                placeholder={lastName}
                                name="lastnameInput"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="header-form-group">
                            <input className="edit-button" type="submit" value="Save" />
                            <input className="edit-button" type="button" value="Cancel" />
                        </div>
                    </form>
                </header>
                <h2 className="sr-only">Accounts</h2>
                {accounts.map((elt) => (
                    <Accounts
                        key={elt.id}
                        title={elt.title}
                        amount={elt.amount}
                        description={elt.description}
                    />
                ))}
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
            editProfile,
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);