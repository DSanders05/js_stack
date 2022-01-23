import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SearchForm = ()=>{

    let [options, setOptions] = useState([]);
    let [selectedOption, setSelectedOption] = useState("people");
    let [id, setId] = useState(null);

    const history = useHistory();

    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
        .then(response=>{
            console.log(response)
            setOptions(Object.keys(response.data))
        })
        .catch(error=>{
            console.log(error)
        })
    },[])

    //function to run when the form submits
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        history.push(`/${selectedOption}/${id}`)
    }

    return(
        <div>
            <form onSubmit={handleFormSubmit} action="" className='d-flex gap-3 justify-content-center mt-4'>
                <div className='form-group'>
                    <label htmlFor="">Search:</label>
                    <select onChange={(e)=>{setSelectedOption(e.target.value)}} name="" id="">
                        {
                            options.map((cat, index)=>{
                                return(
                                    <option key={index} value={cat}>{cat}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor="">ID:</label>
                    <input onChange={(e)=>{setId(e.target.value)}} type="number" size={1} />
                </div>
                <button className='btn-sm btn-primary border-1 border-dark' type="submit">Search</button>
            </form>
        </div>
    );
};


export default SearchForm;