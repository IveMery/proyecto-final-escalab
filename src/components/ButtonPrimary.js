import React from "react";
import Button from "@material-ui/core/Button";
import ErrorBoundary from "../ErrorBoundary";

const ButtonPrimary = (props) => {
  const { onClick, startIcon, variant, color, className, children } = props;
  return (
    <ErrorBoundary>
      <Button
        onClick={onClick}
        startIcon={startIcon}
        variant={variant}
        color={color}
        className={className}
        children={children}
      >
        {children}
      </Button>
    </ErrorBoundary>
  );
};

export default ButtonPrimary;
