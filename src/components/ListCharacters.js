import React, { useContext } from "react";
import Characters from "./Characters";
import Loader from "./Loader";
import { HeroContext } from "../contexts/HeroContext";
import Grid from "@material-ui/core/Grid";
import propTypes from "prop-types";
import Error from "./Error";

const ListCharacters = ({ data }) => {
  const { loading, error } = useContext(HeroContext);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      style={{ paddingBottom: "45px" }}
    >
      {loading ? (
        <Loader />
      ) : !data ? (
        <h3>No encontramos heroes con ese nombre</h3>
      ) : (
        <>
          {data?.map((characters) => {
            return <Characters key={characters.id} characters={characters} />;
          })}
        </>
      )}
      {error && <Error />}
    </Grid>
  );
};

ListCharacters.propTypes = {
  loading: propTypes.bool,
  data: propTypes.object,
};

export default ListCharacters;
