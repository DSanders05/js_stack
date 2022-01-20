import './App.css';
import Profile from './components/Profile';
import Group from './components/Group';

import {
  BrowserRouter,
  Link, //Link is like an anchor tag but it won't reload the whole page when it takes you to a new route
  Switch,//Let's you tell the application which routes we can switch in and out of - SWITCH
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter> {/* Browser Router is just to tell the app that we have routing enabled. It needs to be the main parent in the App component's return*/}
      <div className="App">
        <h1>BookFace- Bootleg facebook in the beginning stages</h1>
        <Link to="/">Go Home</Link> || 
        <Link to="/profile">  Go to my profile</Link>  ||  
        <Link to="/groups">  Go to Groups page</Link>
        <Switch> {/* inside of the Switch tags, we can indicate the routes and the components to render at those routes. Anything outside of the Switch tags will render in ALLL the routes. Anything inside of the Switch tags will only render azt that specific route */}
        <Route path="/profile"> {/* Route paramaters have colons before them */}
          <Profile></Profile>
        </Route>

        <Route path="/groups">
          <Group></Group>
        </Route>

        <Route path="/">
          <p>This page is property of BookFace and we are collecting your data!</p>
        </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
