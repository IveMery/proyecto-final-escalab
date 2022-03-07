import React, { useEffect } from "react";
import lottie from "lottie-web";
import spidernotfound from "../assets/animation/spidernotfound.json";
import Grid from "@material-ui/core/Grid";
import ErrorBoundary from "../ErrorBoundary";

const PageNotFound = () => {
  console.log("me renderizo desde page not found");
  useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById("spidernotfound"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: spidernotfound,
    });
  });

  return (
    <ErrorBoundary>
    <Grid item xs={12}>
      <div style={{ height: "70vh" }} id="spidernotfound"></div>
    </Grid>
    </ErrorBoundary>
  );
};

export default PageNotFound;
