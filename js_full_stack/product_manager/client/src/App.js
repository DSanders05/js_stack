import './App.css';
import NewProduct from './components/NewProduct';
import ProductDetails from './components/ProductDetails';
import EditProduct from './components/EditProduct';
import {useState, useEffect} from 'react';
import {
  BrowserRouter, 
  Switch, 
  Route, 
  Link 
  } from "react-router-dom";
import axios from 'axios';

function App() {

  let [productList, setProductList] = useState([]);
  let [deleted, setDeleted] = useState(false);

  useEffect(()=>{
    axios.get("http://localhost:8000/api/allProducts")
      .then(res=>{
        setProductList(res.data.results)
        console.log(productList)
      })
      .catch(err=>console.log(err))
    },[deleted])

    const deleteProduct = (productId)=>{
      console.log("deleting from main page")
      axios.delete(`http://localhost:8000/api/delete/${productId}`)
        .then(res=>{
          console.log(res)
          setDeleted(!deleted)
        })
        .catch(err=>console.log(err))
    }


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
                    <div key={idx} className='border border-dark container'>
                      <p>Title: <Link to={`/api/${productObj._id}`}>{productObj.title}</Link></p>
                      <p>Price: &#x24;{productObj.price}</p>
                      <p>Description: {productObj.description}</p>
                      <hr />
                      <button onClick={deleteProduct} className="btn btn-danger mb-2">Delete Product</button> | <Link to={`/api/edit/${productObj._id}`} className='btn btn-warning mb-2'>Edit Product</Link>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </Route>
        
        <Route exact path="/api/edit/:id">
          <EditProduct></EditProduct>
        </Route>

        <Route exact path="/api/:id">
          <ProductDetails/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
};

export default App;