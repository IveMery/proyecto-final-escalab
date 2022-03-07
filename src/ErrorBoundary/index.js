import React from "react";
import { Link } from "react-router-dom";
import ButtonPrimary from "../components/ButtonPrimary";
import HomeIcon from "@material-ui/icons/Home";
import  Grid  from "@material-ui/core/Grid";

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
        <Grid container direction="row" justifyContent="center">
          <p>Oops! Tenemos un Problema</p>
          <Link to="/">
            <ButtonPrimary
              startIcon={<HomeIcon />}
              variant="contained"
              color="primary"
            >
              Inicio
            </ButtonPrimary>
          </Link>
        </Grid>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
