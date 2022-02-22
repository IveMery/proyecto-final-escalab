import React, { useContext, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { HeroContext } from "../contexts/HeroContext";
import TableStats from "./TableStats";
//create table

const Stats = () => {
  const { heroes } = useContext(HeroContext);
  console.log(heroes);

 
    const heroStat = (item) => {
      // const totalStats = heroes
      return heroes
        .map((stats) => parseInt(stats.powerstats[item]) || 0)
        .reduce((a, b) => a + b, 0);
      // console.log(totalStats, item, "soy totalStats");
    };


  //   heroStat(item);

  const totalStatsHero = {
    speed: heroStat("speed"),
    strength: heroStat("strength"),
    durability: heroStat("durability"),
    intelligence: heroStat("intelligence"),
    power: heroStat("power"),
    combat: heroStat("combat"),
  };

  //   useEffect(() => {
  //     console.log(totalStatsHero, "soy totalStatsHero");
  //   }, [heroes]);
  const { speed, strength, durability, intelligence, power, combat } =
    totalStatsHero;

  //print stats in list

  return (
    <>
      im stats
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* <TableStats totalStatsHero={totalStatsHero} /> */}
  
          <ul>
            <li>speed: {speed} </li>
            <li>Strength: {strength}</li>
            <li>Durability: {durability}</li>
            <li>Intelligence: {intelligence}</li>
            <li>Power: {power}</li>
            <li>Combat: {combat}</li>
          </ul>
        </Grid>
      </Grid>
    </>
  );
};

export default Stats;
