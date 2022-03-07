import React from "react";
import { createContext, useState, useEffect } from "react";
import swal from "sweetalert";
import { url } from "../constants/index";

const HeroContext = createContext();
const HeroContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [add, setAdd] = useState(false);
  const [error, setError] = useState(false);
  const [eliminated, setEliminated] = useState(false);

  const getData = () => {
    setLoading(true);
    try {
      fetch(`${url + query}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data.results);
          setLoading(false);
          setError(false);
        });
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [query]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      swal({
        title: "Escribe algún nombre por ejemplo: 'Spider' ",
        icon: "warning",
        button: "Aceptar",
        timer: 2800,
      });
    } else {
    }
    setQuery(value);
    setValue("");
  };

  const heroes = localStorage.getItem("heroes")
    ? JSON.parse(localStorage.getItem("heroes"))
    : [];

  const selectedHero = (hero, heroId) => {
    const currentHero = heroes.find((hero) => hero.id === heroId);
    if (currentHero) {
      swal({
        title: "El héroe o villano ya está agregado",
        icon: "warning",
        button: "Aceptar",
        timer: 1500,
      });
      return;
    }
    if (heroes.length <= 5) {
      heroes.push(hero);
      localStorage.setItem("heroes", JSON.stringify(heroes));
      setAdd(!add);
    } else {
      swal({
        title: "No puedes agregar más de 6 héroes o villanos",
        icon: "warning",
        button: "Aceptar",
        timer: 2800,
      });
    }
  };

  const deleteHero = (heroId) => {
    if (localStorage.getItem("heroes")) {
      const newHeroes = heroes.filter((hero) => hero.id !== heroId);
      localStorage.setItem("heroes", JSON.stringify(newHeroes));
      setEliminated(!eliminated);
    }
  };

  useEffect(() => {
    deleteHero();
  }, []);

  const deleteHeroAlert = (heroId) => {
    swal({
      title: "Eliminar",
      text: "Estás seguro de que quieres eliminar el personaje?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((response) => {
      if (response) {
        swal({
          text: "El personaje se ha eliminado con éxito",
          icon: "success",
        });
        deleteHero(heroId);
      }
    });
  };

  return (
    <HeroContext.Provider
      value={{
        data,
        value,
        query,
        handleSubmit,
        handleChange,
        selectedHero,
        deleteHero,
        loading,
        heroes,
        deleteHeroAlert,
        error,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
};

export { HeroContext, HeroContextProvider };
