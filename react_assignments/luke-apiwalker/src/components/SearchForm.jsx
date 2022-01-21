import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SearchForm = ()=>{

    let [options, setOptions] = useState([]);



    return(
        <div>
            <label htmlFor="">Search:</label>
            <select name="" id="">
                <option value="">Placeholder</option>
            </select>
            <label htmlFor="">ID:</label>
            <input type="number" size="1" />
        </div>
    );
};


export default SearchForm;