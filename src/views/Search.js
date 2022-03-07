import React, { useContext, useEffect } from "react";
import { HeroContext } from "../contexts/HeroContext";
import ListCharacters from "../components/ListCharacters";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import { ButtonsContext } from "../contexts/ButtonsContext";
import  Paper  from "@material-ui/core/Paper";
import ErrorBoundary from "../ErrorBoundary";
import Title from "../components/Title";

const Search = () => {
  const { handleChange, handleSubmit, query, data, value } = useContext(
    HeroContext
  );
  const { setShow } = useContext(ButtonsContext);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <ErrorBoundary>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Title>Buscar Personajes</Title>
        <Paper style={{ marginTop: "20px", marginBottom: "20px" }}>
          <form onSubmit={handleSubmit}>
            <TextField
              type="text"
              placeholder="ej... Batman"
              value={value}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </form>
        </Paper>
        {data && <Title>Lista de Personajes</Title>}
        {query && <ListCharacters data={data} />}
      </Grid>
    </ErrorBoundary>
  );
};

export default Search;
