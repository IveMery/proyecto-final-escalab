import React from "react";
import { createContext, useContext } from "react";
import { HeroContext } from "./HeroContext";

const StatsContext = createContext();
const StatsContextProvider = ({ children }) => {
  const { heroes } = useContext(HeroContext);

  const heroStat = (item) => {
    return heroes
      .map((stats) => parseInt(stats.powerstats[item]) || 0)
      .reduce((a, b) => a + b, 0);
  };

  const totalStatsHero = {
    speed: heroStat("speed"),
    strength: heroStat("strength"),
    durability: heroStat("durability"),
    intelligence: heroStat("intelligence"),
    power: heroStat("power"),
    combat: heroStat("combat"),
  };

  return (
    <StatsContext.Provider value={{ totalStatsHero }}>
      {children}
    </StatsContext.Provider>
  );
};

export { StatsContext, StatsContextProvider };
