import React from "react";

const CharacterItem = ({ item }) => {
    console.log(item);
  return <div className="card">
      <div className="card-inner">
          <div className="card-front">
              <img src={item.imageUrl} alt="" />
          </div>
          <div className="card-back">
              <h1>{item.fullName}</h1>
              <ul>
                  <li>
                      <strong>Actor Family:</strong> {item.family}
                  </li>
                  <li>
                      <strong>Actors title:</strong> {item.title}
                  </li>
                  
              </ul>
          </div>
      </div>
  </div>;
};

export default CharacterItem;
