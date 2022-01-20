import './App.css';
import Welcome from './components/Welcome';
import Display from './components/Display';

import {
  BrowserRouter, Link, Switch, Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
        <Route exact path="/home">
          <Welcome></Welcome>
        </Route>

        <Route exact path="/:entry/:color1/:color2">
          <Display></Display>
        </Route>

        <Route exact path="/:entry">
          <Display></Display>
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
