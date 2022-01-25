import React from "react";

import CharacterItem from "./CharacterItem";
import spinner from '../LoadingSpinner'
const CharacterContainer = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.id} item={item} />
      ))}
    </section>
  );
};

export default CharacterContainer;
