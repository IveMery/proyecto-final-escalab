import React, { useContext } from "react";
import Modal from "./Modal";
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
import useGetCharacters from "../custom-hooks/useGetCharacters";
import { characterUrl } from "../constants";
import ErrorBoundary from "../ErrorBoundary";

const Characters = ({ characters }) => {
  const useStyles = makeStyles({
    card: {
      margin: 10,
      color: "white",
      background: "#E83A19",
      border: "none",
    },
    media: {
      height: 320,
      width: 320,
      overflow: "hidden",
      transition: "all 0.2s ease-in",
      "&:hover": {
        transform: " scale(1.1) ",
      },
    },
    info: {
      margin: 5,
      marginTop: 2,
      fontFamily: "Russo One",
    },
  });
  const classes = useStyles();
  const { name, id, image } = characters;
  const { selectedHero, heroes, deleteHeroAlert } = useContext(HeroContext);
  const { show } = useContext(ButtonsContext);
  const { open, openModal, closeModal } = useModal();

  const { hero } = useGetCharacters(`${characterUrl + id}`);

  return (
    <ErrorBoundary>
    <>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          image={image.url}
          height="250"
          name={name}
          alt={name}
          className={classes.media}
          onError={(e) => {
            e.target.src = imagehero;
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" className={classes.info}>
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
                Ver más{" "}
              </ButtonPrimary>
            </>
          ) : (
            <ButtonPrimary
              startIcon={<DeleteIcon />}
              variant="contained"
              color="secondary"
              className={classes.info}
              onClick={() => deleteHeroAlert(id)}
            >
              Eliminar
            </ButtonPrimary>
          )}
        </CardContent>
      </Card>
      {open && <Modal hero={hero} closeModal={closeModal} open={open} />}
    </>
    </ErrorBoundary>
  );
};

Characters.propTypes = {
  hero: propTypes.object,
  characters: propTypes.object,
  open: propTypes.bool,
  show: propTypes.bool,
  selectedHero: propTypes.func,
  heroes: propTypes.array,
  deleteHeroAlert: propTypes.func,
  openModal: propTypes.func,
  closeModal: propTypes.func,
};

export default Characters;
