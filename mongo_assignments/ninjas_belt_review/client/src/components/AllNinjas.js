import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllNinjas =()=>{

    let [allNinjas, setAllNinjas] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/allninjas")
            .then(res=>{
                setAllNinjas(res.data.results)
                console.log(res.data)
            })
            .catch(err=>console.log("ERROR-->", err))
    },[])

    return(
        <div>
            <h3>All the Ninjas</h3>
            {
                allNinjas.map((ninjaObj, i)=>{
                    return(
                        <div key={i}>
                            <h4>{ninjaObj.firstName} {ninjaObj.lastName}</h4>
                            <p>Number of belts: {ninjaObj.numBelts}</p>
                            <p><button><link rel="stylesheet" href="" />Details</button></p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AllNinjas;