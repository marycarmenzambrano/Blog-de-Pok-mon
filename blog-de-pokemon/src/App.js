import React from "react";
import "./App.css";
import Navabr from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import { getPokemons } from "./api";


const { useState, useEffect } = React;

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  const ferchPokemons = async () => {
    try {
        const data = await getPokemons();
        console.log(data.results);
        setPokemons(data.results);
    } catch(err){

    }
  }


  useEffect(() => {
    ferchPokemons();
  },[]);



  return(
    <div>
      <Navabr/>
      <div className="App">
        <Searchbar/>
        <Pokedex pokemons={pokemons}/>

      </div>
    </div>
  );
}


