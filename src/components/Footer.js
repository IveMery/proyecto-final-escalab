import React from "react";
import { Typography } from "@material-ui/core";
import ErrorBoundary from "../ErrorBoundary";

const Footer = () => {
  return (
    <ErrorBoundary>
      <footer
        style={{
          background: "#323256",
          height: "40px",
          bottom: "0",
          position: "absolute",
          width: "100%",
        }}
      >
        <Typography variant="h6" align="center" style={{ fontSize: "14px" }}>
          &copy; {new Date().getFullYear()} - Ivette Mery - Made with love ❤
        </Typography>
      </footer>
    </ErrorBoundary>
  );
};

export default Footer;
