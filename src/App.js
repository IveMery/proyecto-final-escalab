import React, { Suspense, lazy } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HeroContextProvider } from "./contexts/HeroContext";
import Nav from "./components/Nav";
import PageNotFound from "./components/PageNotFound";
import "./App.css";
import Loader from "./components/Loader";
import { ButtonsContextProvider } from "./contexts/ButtonsContext";
// import MyTeam from "./components/MyTeam";
// import Search from "./components/Search";
const MyTeam = lazy(() => import("./components/MyTeam"));
const Search = lazy(() => import("./components/Search"));

const App = () => {
  return (
    
    <HeroContextProvider>
       <ButtonsContextProvider>
      <Router>
        <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Nav />
        <Switch>
          {/* patron HOC se sobreponea a los demas componentes ,disponibiliza los datos  */}
          <Route exact path="/" component={Home} />

         
            <Route exact path="/search" component={Search} />
            <Route exact path="/myteam" component={MyTeam} />
            <Route component={PageNotFound} />
          
        </Switch>
        </Suspense>
        
      </Router>
      </ButtonsContextProvider>
    </HeroContextProvider>
  );
};

export default App;
