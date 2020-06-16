import React from "react";
import { Redirect } from "react-router-dom";

function ProtectedRoute(props) {
  const View = props.component;
  const { sign } = props;
  console.log(props);

  return !sign ? <Redirect to={{ pathname: "/login" }} /> : <View />;
}

export default ProtectedRoute;

/*class ProtectedRoute extends React.Component {
    render() {
      const Component = this.props.component;
      const { sign } = this.props;
      console.log(this.props.sign);
  
      return !sign ? <Redirect to={{ pathname: "/login" }} /> : <Component />;
    }*/
