import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import Courses from "./components/Courses/Courses";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Instructor from "./components/Instructor/Instructor";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/instructor" component={Instructor} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
