import React from "react";

const Navbar = () => {

let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"


    return (
        <nav>
            <div/>
            <div>
            <img src= {imgUrl} all="pokeapi-logo"className="navbar-image" />
            </div>
            <div>🖤</div>
        </nav>
    );
};

export default Navbar;