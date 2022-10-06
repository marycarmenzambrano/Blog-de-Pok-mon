import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";

const {useState, useEffect} = React;


export default function App() {
  const [pokemons, setPokemons] = useState ([]);

  useEffect(() => {
    console.log("Inside useEffect");
  },[])

  return (
    <div>
      <Navbar/>
    <div className="App">
      <Searchbar/>
      <Pokedex/>




    </div>
    </div>
  );
}

