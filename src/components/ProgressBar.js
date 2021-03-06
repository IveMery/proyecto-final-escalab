import React from "react";
import ErrorBoundary from "../ErrorBoundary";

const ProgressBar = (props) => {
  const { bgcolor, completed, value } = props;
  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 5,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  const subtitleStyles = {
    color: "#FFE61B",
  };

  return (
    <ErrorBoundary>
      <>
        <span style={subtitleStyles}>{value}</span>
        <div style={containerStyles}>
          <div style={fillerStyles}>
            <span style={labelStyles}> {completed}</span>
          </div>
        </div>
      </>
    </ErrorBoundary>
  );
};

export default ProgressBar;
