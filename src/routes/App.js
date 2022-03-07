import React, { Suspense, lazy } from "react";
import Home from "../views/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HeroContextProvider } from "../contexts/HeroContext";
import Nav from "../components/Nav";
import PageNotFound from "../components/PageNotFound";
import "../assets/styles/App.css";
import Loader from "../components/Loader";
import { StatsContextProvider } from "../contexts/StatsContext";
import { ButtonsContextProvider } from "../contexts/ButtonsContext";
import Grid from "@material-ui/core/Grid";
import Footer from "../components/Footer";
const MyTeam = lazy(() => import("../views/MyTeam"));
const Search = lazy(() => import("../views/Search"));

const App = () => {
  return (
    <BrowserRouter>
      <HeroContextProvider>
        <StatsContextProvider>
          <ButtonsContextProvider>
            <Nav />
            <Suspense
              fallback={
                <Grid container direction="row" justifyContent="center">
                  <Loader />
                </Grid>
              }
            >
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/myteam" component={MyTeam} />
                <Route component={PageNotFound} />
              </Switch>
              <Footer />
            </Suspense>
          </ButtonsContextProvider>
        </StatsContextProvider>
      </HeroContextProvider>
    </BrowserRouter>
  );
};

export default App;
