import React from "react";


const SearchBar = () => {
    return(
        <div>
            <form className='search_form'>
                <input  
                    type='text'
                    placeholder='Search bar'
                    className='search_imput'
                />
            </form>
        </div>
    )
}

export default SearchBar;