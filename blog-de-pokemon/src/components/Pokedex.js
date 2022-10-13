import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
    const {pokemons} = props;


    return (
        <div>
            <div className="header">
                <h1>Pokedex</h1>
                <Pagination/>
            </div>
            <div className="pokedex-grid">
               {pokemons.map((pokemon, idx) =>{
                return <Pokemon pokemon={pokemon} key={pokemon.className}/>;
               })}
            </div>
        </div>

    );
};


export default Pokedex;