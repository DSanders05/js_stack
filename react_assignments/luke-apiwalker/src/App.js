// import './App.css';

import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';

import SearchForm from './components/SearchForm';
//import Details from './components/Details';

function App() {
  return (
    <BrowserRouter>
      <div className="App text-center">
        <h1>Luke ApiWalker</h1>
        <SearchForm></SearchForm>
        <Switch>
          <Route exact path="/category/id">
            {/* <Details></Details> */}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
