import React, { useContext, useState, useEffect, useRef } from "react";
import Modal from "./Modal";
import useGetCharacters from "../custom-hooks/useGetCharacters";
import imagehero from "../assets/images/imagehero.jpg";
import { HeroContext } from "../contexts/HeroContext";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import InfoIcon from "@material-ui/icons/Info";
import { makeStyles } from "@material-ui/core/styles";
import ButtonPrimary from "./ButtonPrimary";
import { ButtonsContext } from "../contexts/ButtonsContext";
import useModal from "../custom-hooks/useModal";
import propTypes from "prop-types";

import DeleteIcon from "@material-ui/icons/Delete";

const Characters = ({ characters, props }) => {
  const useStyles = makeStyles({
    card: {
      margin: 10,
      // width: "50%",
      color: "white",
      background: "rgb(54, 57, 63)",
      border: "none",
      //   fontFamily: 'Varela Round',
    },
    info: {
      margin: 5,
      marginTop: 2,
      // background: "violet",
    },
  });
  const classes = useStyles();
  const { name, id, image } = characters;
  const { selectedHero, heroes, deleteHero } = useContext(HeroContext);
  const { show, setShow } = useContext(ButtonsContext);
  const { open, openModal, closeModal } = useModal();

  // useEffect(() => {
  //   setShow(true);
  // }, []);
  // const { hero } = useGetCharacters(
  //   `https://superheroapi.com/api.php/1187317678426591/${id}`
  // );

  const [hero, setHero] = useState([]);

  useEffect(() => {
    fetch(`https://superheroapi.com/api.php/1187317678426591/${id}`)
      .then((res) => res.json())
      .then((data) => setHero(data));
  }, []);

  //necesito un componente donde mostrar los puntajes puede ser una tabla y agregarlo al componente de  team para visualizar todo
  //necesito poder visualizar  los puntajes
  //los puntajes deben convertirse a numeros por que vienen en string
  //al darle click y agregar un heroe necesito sumar los puntajes a la tabla
  //si se elimina un heroes necesito restar los puntajes

  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          image={image.url}
          height="250"
          name={name}
          alt={name}
          onError={(e) => {
            e.target.src = imagehero;
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {name}
          </Typography>
          {show ? (
            <>
              <ButtonPrimary
                startIcon={<AddCircleIcon />}
                variant="contained"
                color="primary"
                className={classes.info}
                onClick={() => selectedHero(hero, id)}
              >
                {heroes.find((hero) => hero.id === id) ? "Agregado" : "Agregar"}
              </ButtonPrimary>
              <ButtonPrimary
                className={classes.info}
                startIcon={<InfoIcon />}
                variant="contained"
                color="secondary"
                onClick={openModal}
              >
                Ver mAs{" "}
              </ButtonPrimary>
            </>
          ) : (
            <ButtonPrimary
              startIcon={<DeleteIcon />}
              variant="contained"
              color="secondary"
              onClick={() => deleteHero(id)}
            >
              Eliminar
            </ButtonPrimary>
          )}
        </CardContent>
      </Card>
      {open && <Modal hero={hero} closeModal={closeModal} open={open} />}
    </>
  );
};

Characters.propTypes = {
  hero: propTypes.object,
  characters: propTypes.object,
  open: propTypes.bool,
  show: propTypes.bool,
  selectedHero: propTypes.func,
  heroes: propTypes.array,
  deleteHero: propTypes.func,
  openModal: propTypes.func,
  closeModal: propTypes.func,
};

export default Characters;
