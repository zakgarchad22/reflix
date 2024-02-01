import React, { useState } from 'react';

const MovieSearchBar = ({ onSearch }) => 
{
    const [inputVal, setInputVal] = useState("")
    const handleSearchChange = (e) => 
    {
    const value = e.target.value
    setInputVal(value)
    onSearch(value)
    }

    return (<input className="search-input" type="text" value={inputVal} onChange={handleSearchChange} placeholder="Search for movies..."   />)

    
}

export default MovieSearchBar;
