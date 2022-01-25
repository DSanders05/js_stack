import './App.css';
import NewNinjaForm from './components/NewNinjaForm';
import AllNinjas from './components/AllNinjas';
import {
BrowserRouter, 
Switch, 
Route, 
Link 
} from "react-router-dom";

/* 
collect info from form
-state variable for form info
-onchange for inputs

when form submits, send post request using axios with the form info to create some thing new
*/

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Ninjas Belt Reviewer</h1>
        <Switch>
          <Route exact path="/">
          <NewNinjaForm></NewNinjaForm><br></br>
          <AllNinjas exact path="/api/ninjas"></AllNinjas>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
