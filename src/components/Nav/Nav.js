import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import logo from "../../img/argentBankLogo.png"
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faUserCircle, faSignInAlt, faSignOutAlt } from '@fortawesome/fontawesome-free-solid'

import { logout } from "../../actions/actions";
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
                            <FontAwesomeIcon icon={faUserCircle} />
                            Sign In
                        </Link>
                    </div>
                ) : (
                    <div className="main-nav-logout">
                        <FontAwesomeIcon icon={faSignInAlt} />
                        <span className="main-nav-name">{this.props.user.firstName}</span>
                        <Link
                            className="main-nav-item"
                            to="/"
                            onClick={() => this.props.logout()}
                        >
                            <FontAwesomeIcon icon={faSignOutAlt} />
                            Sign out
                        </Link>
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