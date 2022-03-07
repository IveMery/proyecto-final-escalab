import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import ProgressBar from "./ProgressBar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ErrorBoundary from "../ErrorBoundary";

const Modal = ({ hero, closeModal, open }) => {
  const useStyles = makeStyles({
    dialog: {
      background: "5800FF",
      margin: "0",
      padding: "5",
    },
    dialogContent: {
      background: " #170070",
      border: "none",
    },
    paragraph: {
      width: "400px",
      fontSize: "28px",
      color: "white",
      margin: "0px",
      padding: "5px",
      "@media (max-width:500px)": {
        width: "250px",
      },
      "@media (max-width:350px)": {
        width: "150px",
      },
    },
    dialogTitle: {
      color: "#ef6c00",
      fontFamily: "Russo One",
    },
    dialogActions: { background: " #170070" },
    containerStats: {
      "@media (max-width:500px)": {
        fontSize: 15,
      },
    },
  });
  const classes = useStyles();
  const { powerstats, biography } = hero;
  const {
    intelligence,
    strength,
    speed,
    durability,
    power,
    combat,
  } = powerstats;

  const strengthNumber = parseInt(strength) || 0;
  const combatNumber = parseInt(combat) || 0;
  const durabilityNumber = parseInt(durability) || 0;
  const powerNumber = parseInt(power) || 0;
  const intelligenceNumber = parseInt(intelligence) || 0;
  const speedNumber = parseInt(speed) || 0;

  const testData = [
    { bgcolor: "#6a1b9a", completed: strengthNumber, value: "Strength" },
    { bgcolor: "#00695c", completed: combatNumber, value: "Combat" },
    { bgcolor: "#ef6c00", completed: durabilityNumber, value: "Durability" },
    { bgcolor: "#6a1b4a", completed: powerNumber, value: "Power" },
    { bgcolor: "#ef6c80", completed: speedNumber, value: "Speed" },
    {
      bgcolor: "#00691c",
      completed: intelligenceNumber,
      value: "Intelligence",
    },
  ];

  return (
    <ErrorBoundary>
      <Dialog open={open} className={classes.dialog}>
        <DialogContent className={classes.dialogContent}>
          <Typography
            align="center"
            className={classes.dialogTitle}
            variant="h6"
            gutterBottom
          >
            Estadísticas
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
            flexWrap="wrap"
            className={classes.containerStats}
          >
            {testData.map((item, idx) => (
              <ProgressBar
                key={idx}
                bgcolor={item.bgcolor}
                completed={item.completed}
                value={item.value}
              />
            ))}
            <p className={classes.paragraph} align="center">
              Orientación:{" "}
              <span>
                {biography.alignment === "good"
                  ? "Héroe"
                  : biography.alignment === "bad"
                  ? "Villano"
                  : "Neutral"}
              </span>
            </p>
          </Box>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button
            style={{ background: "#BF1363", color: "white" }}
            onClick={closeModal}
          >
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </ErrorBoundary>
  );
};

export default Modal;
