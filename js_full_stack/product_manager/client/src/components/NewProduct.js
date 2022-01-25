import React, { useState, useEffect} from 'react';
import axios from 'axios';





const NewProduct = ()=>{

    let [title, setTitle] = useState("");
    let [price, setPrice] = useState(null);
    let [description, setDescription] = useState("");

    const createProductSubmitHandler = (e)=>{
        e.preventDefault()
        let productObj = {title,price,description}
        console.log(productObj)

        //axios.post call to create new product
        axios.post("http://localhost:8000/api/create", productObj)
            .then(response=>{
                console.log("response after posting",response)
            })
            .catch(err=>console.log("error in submitting post request", err))
    }
    
    return(
        <div>
            <h3>Product Manager</h3>
            <form onSubmit={createProductSubmitHandler}>
                <div>
                    <label htmlFor="">Title:</label>
                    <input type="text" onChange={(e)=>{setTitle(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor="">Price:</label>
                    <input type="number" onChange={(e)=>{setPrice(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor="">Description:</label>
                    <input type="text" className="text-field" onChange={(e)=>{setDescription(e.target.value)}} />
                </div><br></br>
                <button type="submit" className='btn btn-success'>Create</button>
            </form>
        </div>
    )
};

export default NewProduct