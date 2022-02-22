import { createContext, useState, useEffect } from "react";

const HeroContext = createContext();
const HeroContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [add, setAdd] = useState(false);
  const [error, setError] = useState(false);
  const [eliminated, setEliminated] = useState(false);

  const getData = () => {
    try {
      fetch(
        `https://www.superheroapi.com/api.php/1187317678426591/search/${query}`
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data.results);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
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
    setQuery(value);
    setValue("");
  };

  const heroes = localStorage.getItem("heroes")
    ? JSON.parse(localStorage.getItem("heroes"))
    : [];

  const selectedHero = (hero, heroId) => {
    const currentHero = heroes.find((hero) => hero.id === heroId);
    if (currentHero) {
      alert("El heroe ya esta agregado");
      return;
    }
    if (heroes.length <= 5) {
      heroes.push(hero);
      localStorage.setItem("heroes", JSON.stringify(heroes));
      setAdd(!add);
    } else {
      alert("No puedes agregar mas de 6 heroes");
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

  return (
    //patron de diseno Provider
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
      }}
    >
      {children}
    </HeroContext.Provider>
  );
};

export { HeroContext, HeroContextProvider };
