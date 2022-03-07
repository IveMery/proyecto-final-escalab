import React from "react";
import batman from "../assets/animation/gif/batman.gif";
import Grid from "@material-ui/core/Grid";
import Title from "./Title";
import Box from "@material-ui/core/Box";
import ErrorBoundary from "../ErrorBoundary";

const Empty = () => {
  return (
    <ErrorBoundary>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Title variant="h6" gutterBottom>
          Agrega algunos héroes o villanos...
        </Title>
        <Box>
          <img style={{ width: "300px" }} src={batman} alt="batman gif" />
        </Box>
      </Grid>
    </ErrorBoundary>
  );
};

export default Empty;
