import React, { useState, useEffect} from 'react';
import { useParams } from "react-router";
import {useHistory} from "react-router-dom";
import axios from 'axios';

const EditProduct = ()=>{

    let [product, setProduct] = useState({})
    const { id } = useParams();

    let [title, setTitle] = useState("");
    let [price, setPrice] = useState(null);
    let [description, setDescription] = useState("");

    const updateItem = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/${id}`)
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{console.log(err)})
    }


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/${id}`)
            .then(res=>{
                    console.log(res.data.results)
                    setProduct(res.data.results)
                })
                .catch(err=>console.log("The Error is being cause when this runs--->",err))
            },[]);
    
    return(
        <div>
            <h1 className='text-center mb-3'>Edit Product Page</h1>
            <form onSubmit={updateItem} className='text-center mt-3'>
                <div>
                    <label htmlFor="">Title:</label>
                    <input type="text" value={product.title} onChange={(e)=>{setTitle(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor="">Price:</label>
                    <input type="number" value={product.price} onChange={(e)=>{setPrice(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor="">Description:</label>
                    <input type="text" value={product.description} className="text-field" onChange={(e)=>{setDescription(e.target.value)}} />
                </div><br></br>
                <button type="submit" className='btn btn-success'>Create</button>
            </form>
        </div>
    )
};

export default EditProduct;