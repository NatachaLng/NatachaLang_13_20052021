import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css"

import Nav from "../Nav/Nav";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
        <div className="app">
          <Nav />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/profile" component={ProfilePage} />
          </Switch>
          <Footer />
        </div>
    );
  }
}

export default App;
