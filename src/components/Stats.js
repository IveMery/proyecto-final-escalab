import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import TableStats from "./TableStats";
import Title from "./Title";
import { StatsContext } from "../contexts/StatsContext";
import ErrorBoundary from "../ErrorBoundary";

const Stats = () => {
  const { totalStatsHero } = useContext(StatsContext);
  return (
    <ErrorBoundary>
      <>
        <Title align="center" gutterBottom>
          Resumen de Stats
        </Title>
        <Grid container spacing={3} direction="row" justifyContent="center">
          <Grid item lg={9} xs={12}>
            <TableStats totalStatsHero={totalStatsHero} />
          </Grid>
        </Grid>
      </>
    </ErrorBoundary>
  );
};

export default Stats;
