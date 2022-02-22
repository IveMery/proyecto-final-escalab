import React, { useContext } from "react";
import Characters from "./Characters";
import Loader from "./Loader";
import { HeroContext } from "../contexts/HeroContext";
import { Grid } from "@material-ui/core";
import propTypes from "prop-types";

const ListCharacters = ({ data }) => {
  const { loading } = useContext(HeroContext);

  return (
    <Grid container direction="row" justifyContent="center">
      {loading ? (
        <Loader />
      ) : !data ? (
        <div>No encontramos heroes con ese nombre</div>
      ) : (
        <>
          {data?.map((characters) => {
            //render props pasar datos del componente padre al componente hijo, de forma unidireccional
            return <Characters key={characters.id} characters={characters} />;
          })}
        </>
      )}
    </Grid>
  );
};

ListCharacters.propTypes = {
 loading: propTypes.bool,
 data: propTypes.arrayOf(propTypes.object),
};

export default ListCharacters;
