import React, { useContext, useEffect } from "react";
import { HeroContext } from "../contexts/HeroContext";
import ListCharacters from "./ListCharacters";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import { ButtonsContext } from "../contexts/ButtonsContext";
import { Paper } from "@material-ui/core";
import Title from "./Title";
const Search = () => {
  const { handleChange, handleSubmit, query, data, value } =
    useContext(HeroContext);
  const { show, setShow } = useContext(ButtonsContext);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Paper>
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            placeholder="Search"
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
      
      {query && <ListCharacters data={data} />}
    </Grid>
  );
};

export default Search;
