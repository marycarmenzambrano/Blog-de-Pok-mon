import React from "react";
import FavoriteContext from "../contexts/favoritesContext";


const { useContext } = React;

const Navbar = () => {
    const { favoritePokemons } = useContext(FavoriteContext);


let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"


    return (
        <nav>
            <div/>
            <div>
            <img src= {imgUrl} all="pokeapi-logo"className="navbar-image"/>
            </div>
            <div>
                <button>{favoritePokemons.length}❤️</button></div>
        </nav>
    );
};

export default Navbar;