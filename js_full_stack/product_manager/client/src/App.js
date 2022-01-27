import './App.css';
import NewProduct from './components/NewProduct';
import ProductDetails from './components/ProductDetails';
import {useState, useEffect} from 'react';
import {
  BrowserRouter, 
  Switch, 
  Route, 
  Link 
  } from "react-router-dom";
import axios from 'axios';

function App() {

  let [productList, setProductList] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8000/api/allProducts")
      .then(res=>{
        setProductList(res.data.results)
        console.log(productList)
      })
      .catch(err=>console.log(err))
    },[])


  return (

    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <div className="App container mt-2">
            <NewProduct/>
            <hr />
            <div className="container mt-4">
              <h4>All Products</h4>
              {
                productList.map((productObj, idx)=>{
                  return(
                    <div key={idx} className='border border-dark'>
                      <p>Title: <Link to={`/api/${productObj._id}`}>{productObj.title}</Link></p>
                      <p>Price: {productObj.price}</p>
                      <p>Description: {productObj.description}</p>
                      <p>Item ID: {productObj._id}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </Route>
        
        <Route exact path="/api/:id">
          <ProductDetails/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
};

export default App;