import React, { useState, useEffect } from "react";

const useGetCharacters = (url) => {
  const [hero, setHero] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setHero(data);
          setLoading(false);
        });
    } catch (error) {
      console.log(error.mesagge);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  });

  return {
    hero,
    loading,
  };
};

export default useGetCharacters;
