import React from "react";
import { useState } from "react";

const Search = ({getQuery}) => {
  const [inputText, setInputText] = useState("");
  const onChange = (p) => {
      setInputText(p);
      getQuery(p);
  };
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search actor"
          value={inputText}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
