import React from "react";
import Button from "@material-ui/core/Button";
const ButtonPrimary = (props) => {
  const { onClick, startIcon, variant, color, className, children } = props;
  return (
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
  );
};

export default ButtonPrimary;
