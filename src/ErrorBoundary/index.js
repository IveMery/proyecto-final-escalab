import React from "react";
import { Link } from "react-router-dom";
import ButtonPrimary from "../components/ButtonPrimary";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>oops! Tenemos un Problema</p>{" "}
          <Link to="/">
            <ButtonPrimary>Inicio</ButtonPrimary>
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;