import React from "react";
import { searchPokemon } from "../api";
import { useState } from "react";

const Searchbar = () => {
  const [search, setSearch] = useState ('');
  const [pokemon, setPokemon] = useState();


     const onChange = (e) => {
        setSearch(e.target.value);
     };


     const onClick = async (e) => {
        const data = await searchPokemon(search);
        setPokemon(data);
     };

    return (
        <div className="searchbar-container">
            <div>
                <input placeholder="Buscar Pokemon"
                onChange={onChange}
                
                />
            </div>
            <div>
                <button onClick={onClick}>Buscar</button>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Searchbar;