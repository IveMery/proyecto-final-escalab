import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { DialogTitle } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import Box from "@material-ui/core/Box";
const Modal = ({ hero, closeModal, open }) => {
  const useStyles = makeStyles({
    dialogContent: {
      // margin: 10,
      // width: "50%",
      // color: "white",
      // background: "rgb(54, 57, 63)",
      border: "none",
      //   fontFamily: 'Varela Round',
      width: "400px",
    },
  });
  const classes = useStyles();
  const { name, powerstats, biography } = hero;

  const { intelligence, strength, speed, durability, power, combat } =
    powerstats;

  return (
    <Dialog open={open}>
      <DialogContent className={classes.dialogContent}>
        <DialogTitle align="center">Estadisticas</DialogTitle>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
        >
          <p>
            Fuerza: <span>{strength === "null" ? " 0" : strength}</span>
          </p>
          <p>
            Combate: <span>{combat === "null" ? "0" : combat}</span>
          </p>
          <p>
            Durabilidad: <span>{durability === "null" ? "0" : durability}</span>
          </p>
          <p>
            Poder: <span>{power === "null" ? "0" : power}</span>
          </p>
          <p>
            Inteligencia:{" "}
            <span>{intelligence === "null" ? "0" : intelligence}</span>
          </p>
          <p>
            Velocidad: <span>{speed === "null" ? "0" : speed}</span>
          </p>
          <p>
            Orientacion:{" "}
            <span>
              {biography.alignment === "good"
                ? "Heroe"
                : biography.alignment === "bad"
                ? "Villano"
                : "Neutral"}
            </span>
          </p>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
