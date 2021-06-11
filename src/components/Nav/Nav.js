import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Link} from "react-router-dom";
import logo from "../../img/argentBankLogo.png"
import signIn from "../../img/sign-in-alt-solid.svg"
import signOut from "../../img/sign-out-alt-solid.svg"
import user from "../../img/user-circle-solid.svg"


import {logout} from "../../actions/actions";
import "./Nav.css";


class Nav extends Component {
    render() {
        return (
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Logo Argent Bank "
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                {!this.props.user.logStatus ? (
                    <div>
                        <Link className="main-nav-item" to="/login">
                            <img src={signIn} width={"20px"} className={"nav-img"}/>
                            Sign In
                        </Link>
                    </div>
                ) : (
                    <div className="main-nav-logout">
                        <div className='main-nav-item'>
                            <img src={user} width={"20px"} className={"nav-img"}/>
                            <span className="main-nav-name">{this.props.user.firstName}</span>
                        </div>
                        <div className='main-nav-item'>
                            <Link
                                className="main-nav-item"
                                to="/"
                                onClick={() => this.props.logout()}
                            >
                                <img src={signOut} width={"20px"} className={"nav-img"}/>
                                Sign out
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            logout,
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);