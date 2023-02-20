import React from "react";
import { useEffect, useState } from "react";
const Popular = () => {
  const [Popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
    const data = await api.json();
    // console.log(data);
    setPopular(data.recipes);
  };

  return (
    <div>
      {Popular.map((recipe) => {
        return (
            <div>
            <p>{recipe.title}</p>
            </div>
        );
      })}
    </div>
  );
};

export default Popular;
