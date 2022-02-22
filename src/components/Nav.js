import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import logo from "../assets/images/logo.jpg";
import title from "../assets/images/title.png";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import { Link } from "react-router-dom";

const Nav = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: 50,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: "none",
      textAlign: "center",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },

    logo: {
      height: "70px",
      borderRadius: "70%",
    },
    logoTitle: {
      height: "70px",
      borderRadius: "70%",
    },
    link: {
      textDecoration: "none",
      marginRight: "10px",
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar color="inherit" position="static">
        <Toolbar>
          <Link to="/">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <img className={classes.logo} src={logo} alt="logo" />
            </IconButton>
          </Link>
          <Typography className={classes.title} variant="h6" noWrap>
            <img className={classes.logoTitle} src={title} alt="logo" />
          </Typography>
          <Link to="/" className={classes.link}>
         
              <HomeIcon /> Inicio
           
          </Link>
          <Link to="/Search" className={classes.link}>
          
              {" "}
              <SearchIcon />
              Buscar
            
          </Link>
          <Link to="/MyTeam" className={classes.link}>
            <GroupIcon /> Mi Equipo
       
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
