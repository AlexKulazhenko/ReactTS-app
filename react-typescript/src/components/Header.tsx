import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import SearchBar from "./SearchBar/SearchBar";

const Header = () => {
    return(
             <div>     
                <SearchBar />
                <AboutUs />
            </div>   
    )
}

export default Header;