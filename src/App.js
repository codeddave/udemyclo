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
            <Route exact path="/" component={Main} />
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
            <Route exact path="/courses" component={Courses} />
            <Route exact path="/instructor" component={Instructor} />
            {this.state.isLoggedIn === false ? (
              <div>
                <Login />
              </div>
            ) : (
              <Main />
            )}
            <ProtectedRoute exact={true} path="/" component={Main} />
            + <ProtectedRoute path="/courses" component={Courses} />
            <ProtectedRoute
              exact={true}
              path="/instructor"
              component={Instructor}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
