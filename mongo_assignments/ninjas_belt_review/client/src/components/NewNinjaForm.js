import React, { useState } from 'react';
import axios from 'axios';

const NewNinjaForm = ()=>{

    //state variables for each info collected from form
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [numBelts, setNumBelts] = useState(0);
    let [isVeteran, setIsVeteran] = useState(false);

    const createNinjaSubmitHandler = (e)=>{
        e.preventDefault()
        let formInfoObj = {firstName,lastName,numBelts,isVeteran}
        console.log(formInfoObj)

        axios.post("http://localhost:8000/api/create", formInfoObj) //formInfoObj contains the form information
            .then(response=>{
                console.log("response after posting", response)
            })
            .catch(err=>console.log("error in submitting post request", err))
    }

    return(
        <div>
            <form onSubmit={createNinjaSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="">First Name: </label>
                    <input type="text" onChange={(e)=>{setFirstName(e.target.value)}} /><br></br>         
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name:</label>
                        <input type="text" onChange={(e)=>{setLastName(e.target.value)}} /><br></br>
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Belts:</label>
                        <input type="number" onChange={(e)=>{setNumBelts(e.target.value)}} /><br></br>
                </div>
                <div className="form-group">
                    <label htmlFor="">Is Ninja a Veteran?:</label>
                        <input type="checkbox" className='form-checkbox' onChange={(e)=>{setIsVeteran(!isVeteran)}} /><br></br>
                </div>
                <input type="submit" value="Create Ninja!" className="btn btn-success mt-3" />
            </form>
        </div>
    )
};

export default NewNinjaForm;