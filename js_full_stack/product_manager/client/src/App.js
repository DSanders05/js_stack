// import logo from './logo.svg';
import './App.css';
import NewProduct from './components/NewProduct';
import {
  BrowserRouter, 
  Switch, 
  Route, 
  Link 
  } from "react-router-dom";

function App() {
  return (

    <div className="App">
      <h1>Working Page</h1>
      <NewProduct></NewProduct>
    </div>
  );
}

export default App;
