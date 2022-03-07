import React, { useContext, useEffect } from "react";
import Box from "@material-ui/core/Box";
import { HeroContext } from "../contexts/HeroContext";
import Empty from "../components/Empty";
import Characters from "../components/Characters";
import { ButtonsContext } from "../contexts/ButtonsContext";
import Title from "../components/Title";
import propTypes from "prop-types";
import Stats from "../components/Stats";
import Grid from "@material-ui/core/Grid";

const MyTeam = () => {
  const { heroes } = useContext(HeroContext);
  const { setShow } = useContext(ButtonsContext);

  useEffect(() => {
    setShow(false);
  });

  return (
    <>
      {heroes.length > 0 && (
        <Title gutterBottom align="center" variant="h3">
          Mi equipo
        </Title>
      )}
      <Box p={3}>
        <Grid container direction="row" justifyContent="center">
          {heroes.length > 0 ? (
            heroes.map((characters) => {
              const { id } = characters;
              return <Characters key={id} characters={characters} />;
            })
          ) : (
            <Empty />
          )}
        </Grid>
        <Box style={{ paddingBottom: "45px" }}>
          {heroes.length > 0 && <Stats />}
        </Box>
      </Box>
    </>
  );
};

MyTeam.propTypes = {
  heroes: propTypes.object,
  setShow: propTypes.bool,
};
export default MyTeam;
