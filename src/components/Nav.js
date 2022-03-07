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
import Hidden from "@material-ui/core/Hidden";
import ErrorBoundary from "../ErrorBoundary";

const Nav = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
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
      paddingLeft: "60px",
    },
    link: {
      textDecoration: "none",
      marginRight: "5px",
      color: "black",
    },
    nav: {
      fontSize: "1rem",
      padding: "5px",
      fontFamily: "Russo One",
      "&:focus": {
        textDecoration: "underline",
      },
    },
  }));

  const classes = useStyles();
  return (
    <ErrorBoundary>
      <nav className={classes.root}>
        <AppBar color="inherit" position="static">
          <Toolbar>
            <Link to="/">
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
              >
                <img className={classes.logo} src={logo} alt="logo" />
              </IconButton>
            </Link>
            <Typography className={classes.title} variant="h6" noWrap>
              <img className={classes.logoTitle} src={title} alt="logo" />
            </Typography>
            <Link to="/" className={classes.link}>
              <IconButton className={classes.nav}>
                <HomeIcon fontSize="medium" color="secondary" />
                <Hidden xsDown>
                  <p>Inicio</p>
                </Hidden>
              </IconButton>
            </Link>
            <Link to="/search" className={classes.link}>
              <IconButton className={classes.nav}>
                <SearchIcon fontSize="small" color="secondary" />
                <Hidden xsDown>
                  <p>Buscar</p>
                </Hidden>{" "}
              </IconButton>
            </Link>
            <Link to="/myteam" className={classes.link}>
              <IconButton className={classes.nav}>
                <GroupIcon fontSize="small" color="secondary" />
                <Hidden xsDown>
                  <p>Mi Equipo</p>
                </Hidden>{" "}
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </nav>
    </ErrorBoundary>
  );
};

export default Nav;
