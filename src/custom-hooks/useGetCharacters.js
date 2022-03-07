import React, { useState, useEffect } from "react";

const useGetCharacters = (url) => {
  const [hero, setHero] = useState([]);

  useEffect(() => {
    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setHero(data);
        });
    } catch (error) {
      console.error(error);
    }
  }, [url]);

  return {
    hero,
  };
};

export default useGetCharacters;
