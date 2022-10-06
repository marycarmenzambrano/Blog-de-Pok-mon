import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import { getPokemons } from "./api";

const {useState, useEffect} = React;


export default function App() {
  const [pokemons, setPokemons] = useState ([]);

  const fetchPokemons = async () => {
    try {
        const data = await getPokemons();
        setPokemons(data.results);
    } catch(err){

    };
  };

  useEffect(() => {
    fetchPokemons();
  },[]);

  return (
    <div>
      <Navbar/>
    <div className="App">
      <Searchbar/>
      <Pokedex pokemons={pokemons}/>




    </div>
    </div>
  );
}

