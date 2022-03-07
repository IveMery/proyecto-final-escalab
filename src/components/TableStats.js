import React from "react";
import { Table } from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import { TableContainer } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ErrorBoundary from "../ErrorBoundary";

function createData(
  name,
  speed,
  durability,
  intelligence,
  power,
  combat,
  strength
) {
  return { name, speed, durability, intelligence, power, combat, strength };
}

export const TableStats = ({ totalStatsHero }) => {
  const useStyles = makeStyles({
    head: {
      background: "#323232",
      fontFamily: "Chewy",
    },
    tablecell: {
      color: "white",
      fontFamily: "Chewy",
    },
    tablecellStats: {
      color: "black",
      fontFamily: "Chewy",
    },
  });
  const classes = useStyles();
  const {
    speed,
    strength,
    durability,
    intelligence,
    power,
    combat,
  } = totalStatsHero;
  const rows = [
    createData(
      "Total Stats",
      speed,
      durability,
      intelligence,
      power,
      combat,
      strength
    ),
  ];
  return (
    <ErrorBoundary>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow className={classes.head}>
              <TableCell className={classes.tablecell}>Stats</TableCell>
              <TableCell className={classes.tablecell} align="center">
                Speed
              </TableCell>
              <TableCell className={classes.tablecell} align="center">
                Durability
              </TableCell>
              <TableCell className={classes.tablecell} align="center">
                Intelligence
              </TableCell>
              <TableCell className={classes.tablecell} align="center">
                Power
              </TableCell>
              <TableCell className={classes.tablecell} align="center">
                Combat
              </TableCell>
              <TableCell className={classes.tablecell} align="center">
                Strength
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.tablecellStats}
                >
                  {row.name}
                </TableCell>
                <TableCell align="center" className={classes.tablecellStats}>
                  {row.speed}
                </TableCell>
                <TableCell align="center" className={classes.tablecellStats}>
                  {row.durability}
                </TableCell>
                <TableCell align="center" className={classes.tablecellStats}>
                  {row.intelligence}
                </TableCell>
                <TableCell align="center" className={classes.tablecellStats}>
                  {row.power}
                </TableCell>
                <TableCell align="center" className={classes.tablecellStats}>
                  {row.combat}
                </TableCell>
                <TableCell align="center" className={classes.tablecellStats}>
                  {row.strength}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ErrorBoundary>
  );
};

export default TableStats;
