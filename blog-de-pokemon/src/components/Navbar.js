import React from "react";

const Navbar = () => {
    let imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

    return (
     <nav>
        <div/>
            <div>
        <img src= {imgUrl} alt= "pokeapi-logo" className="navbar-image" ></img>
            </div>
        <div>Favorites🖤</div>
    </nav>
        
    );
};

export default Navbar;