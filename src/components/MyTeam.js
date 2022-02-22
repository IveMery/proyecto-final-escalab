import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { HeroContext } from "../contexts/HeroContext";
import Slider from "react-slick";
import "../assets/styles/sliderArrow.css";
import Empty from "./Empty";
import Characters from "./Characters";
import { ButtonsContext } from "../contexts/ButtonsContext";
import Title from "./Title";
import propTypes from "prop-types";
import Stats from "./Stats";

const MyTeam = () => {
  const { heroes, deleteHero } = useContext(HeroContext);
  const { setShow } = useContext(ButtonsContext);

  useEffect(() => {
    setShow(false);
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    speed: 500,
    autoplaySpeed: 2000,
    autoplay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Title gutterBottom align="center">
        Mi equipo
      </Title>
      <Box p={3}>
        <Slider {...settings}>
          {heroes.length > 0 ? (
            heroes.map((characters) => {
              const { id } = characters;
              return (
                <Characters
                  key={id}
                  characters={characters}
                  deleteHero={deleteHero}
                />
              );
            })
          ) : (
            <Empty />
          )}
        </Slider>

        <Box>
          <Stats heroes={heroes} />
        </Box>
      </Box>
    </>
  );
};

MyTeam.propTypes = {
  heroes: propTypes.arrayOf(propTypes.object),
  deleteHero: propTypes.func,
};
export default MyTeam;
