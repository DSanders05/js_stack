import React, { useState, useEffect} from 'react';
import { useParams } from "react-router";
import {useHistory} from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';


const ProductDetails = ()=>{

    const history = useHistory();
    const { id } = useParams();
    
    let [product, setProduct] = useState({})

    const productDeleteHandler = (productId)=>{
        console.log("delete function")
        axios.delete(`http://localhost:8000/api/delete/${id}`)
            .then(res=>{
                console.log(res);
                history.push("/")
            })
            .catch(err=>{console.log(err)})
    }

    useEffect(()=>{
            axios.get(`http://localhost:8000/api/${id}`)
            .then(res=>{
                    // console.log(res.data.results)
                    setProduct(res.data.results)
                })
                .catch(err=>console.log("The Error is being cause when this runs--->",err))
            },[])
            return(
                <div className='container text-center mt-4'>
                    <h3>Details Page</h3>
                    <hr />
                    <h4>{product.title}</h4>
                    <p>&#x24;{product.price}</p>
                    <p>{product.description}</p>
                    <button onClick={productDeleteHandler} className="btn btn-danger">Delete Product</button>
                </div>
    )
};

export default ProductDetails;