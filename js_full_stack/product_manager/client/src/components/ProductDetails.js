import React, { useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
// import { Link } from 'react-router-dom';


const ProductDetails = ()=>{
    
    const { id } = useParams();
    
    let [product, setProduct] = useState({})

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
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </div>
    )
};

export default ProductDetails;