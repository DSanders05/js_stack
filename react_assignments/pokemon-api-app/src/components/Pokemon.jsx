import React, { useState } from 'react';
import axios from 'axios';

const Pokemon=()=>{

    let [pokemonList, setPokemonList] = useState([]);

    const getPokemon = ()=>{axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then((response)=>{
        setPokemonList(response.data.results);
    })
    .catch((err)=>{
        console.log(err)
    })
    }

    return (
        <div className='mt-5'>
            <h3>Welcome to the Pokemon List!</h3>
            <p className='mt-3'><button onClick={getPokemon}>Fetch Pokemon Information</button></p>

            {
                pokemonList.map((pokemon, index)=>{
                    return (
                        
                        <ul>
                            <li className="text-capitalize font-weight-bold">{pokemon.name}</li>
                        </ul>
                        
                    )
                })
            }
        </div>
    )
}

export default Pokemon;