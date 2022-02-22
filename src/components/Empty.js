import React from "react";
import batman from "../assets/animation/gif/batman.gif";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Empty = () => {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
      <Typography variant="h4" gutterBottom >Agrega algunos heroes</Typography>
      <div>
        <img style={{ width: "240px" }} src={batman} alt="batman gif" />
      </div>
    </Grid>
  );
};

export default Empty;
