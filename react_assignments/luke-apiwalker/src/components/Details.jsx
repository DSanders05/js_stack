import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = ()=>{

    const {category, id} = useParams();

    let [info, setInfor] = useState({});

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then(response=>{
            // console.log(response.data)
            setInfor(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[category,id])

    return (
        <div>
            {
                category === "people"?
                <>
                <h1>Name: {info.name}</h1>
                <p>Height: {info.height}</p>
                <p>Mass: {info.mass}</p>
                <p>Birth Year: {info.birth_year}</p>
                </>: category === "planets"?
                <>
                <h1>Name: {info.name}</h1>
                <p>Diameter: {info.diameter}</p>
                <p>Climate: {info.climate}</p>
                <p>Terrain: {info.terrain}</p>
                </>: category === "films"?
                <>
                <h1>Title: {info.title}</h1>
                <p>Episode: {info.episode_id}</p>
                <p>Director: {info.director}</p>
                <p>Release Date: {info.release_date}</p>
                </>: category === "species"?
                <>
                <h1>Name: {info.name}</h1>
                <p>Classification: {info.classification}</p>
                <p>Average Lifespan: {info.average_lifespan}</p>
                <p>Average Height: {info.average_height}</p>
                </>: category === "vehicles"?
                <>
                <h1>Name: {info.name}</h1>
                <p>Model: {info.model}</p>
                <p>Manufacturer: {info.manufacturer}</p>
                <p>Crew: {info.crew}</p>
                </>: category === "starships"?
                <>
                <h1>Name: {info.name}</h1>
                <p>Model: {info.model}</p>
                <p>Manufacturer: {info.manufacturer}</p>
                <p>Crew: {info.crew}</p>
                </>:
                <h1>Sorry, we did not find the droids you were looking for! Try your search again!</h1>
            }
        </div>
    );
};


export default Details;