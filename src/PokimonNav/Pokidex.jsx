import React from "react";
import{useState, useEffect} from "react";
import { getTypes } from "../Pokimon/Pokimon";
export const Pokidex = () => {
    const[PokemonList, setPokemonList] = useState([]);
    const[isLoading, setIsloading] = useState(true);
    const[searchName, setSearchName] = useState("");


    const handleSearch = (e) => {
      e.preventDefault();

      let filteredList = PokemonList.filter(({name}) => name == name.toLowercase().includes(searchName.toLowerCase()));

      setPokemonList(filteredList);

    }
  
    useEffect(() =>{
      fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
      .then((res)=> res.json())
      .then((resBody)=> setPokemonList(resBody.pokemon))
      .catch((e)=> console.error(e))
      .finally(()=> {
        setIsloading(false);
      });
    });

    if (isLoading) return <h1>Loading...</h1>
    return(
        <main>
          <input key={handleSearch}/>
          <button>Search</button>
        <h1>Pokedex{PokemonList.length}</h1>
        <ul>{PokemonList.map((pokemon)=> {
          return <li key={pokemon.id}>{pokemon.name}</li>;
        })}</ul>
        </main>
    );
};
