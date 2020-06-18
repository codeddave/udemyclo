import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import Courses from "./components/Courses/Courses";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoute from "./components/Login/ProtectedRoute";

import Instructor from "./components/Instructor/Instructor";

class App extends React.Component {
  state = {
    isLoggedIn: false,
  };

  Login() {
    this.setState({
      isLoggedIn: true,
    });
    console.log(this.state.isLoggedIn);
  }

  Logout() {
    this.setState({
      isLoggedIn: false,
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Switch>
            <Route
              exact
              path="/login"
              component={() => (
                <Login
                  sign={this.state.isLoggedIn}
                  Login={this.Login.bind(this)}
                  Logout={this.Logout.bind(this)}
                />
              )}
            />
            <ProtectedRoute
              exact={true}
              path="/"
              component={Main}
              sign={this.state.isLoggedIn}
            />
            +{" "}
            <ProtectedRoute
              exact={true}
              path="/courses"
              component={Courses}
              sign={this.state.isLoggedIn}
            />
            <ProtectedRoute
              exact={true}
              path="/instructor"
              component={Instructor}
              sign={this.state.isLoggedIn}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
