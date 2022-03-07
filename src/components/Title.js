import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import ErrorBoundary from "../ErrorBoundary";

const Title = (props) => {
  const useStyles = makeStyles({
    title: {
      marginTop: 25,
      fontFamily: "Chewy",
    },
  });
  const classes = useStyles();

  const { children } = props;
  return (
    <ErrorBoundary>
      <Typography {...props} className={classes.title}>
        {children}
      </Typography>
    </ErrorBoundary>
  );
};

export default Title;
