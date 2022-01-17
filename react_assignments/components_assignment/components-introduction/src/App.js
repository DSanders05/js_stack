// import logo from './logo.svg';
import './App.css';
import Person from './Components/PersonCard';

function App() {
  return (
    <div className="App">
      <Person firstName={"Jane"} lastName={"Doe"} age={45} hair={"Black"}></Person>
      <hr />
      <Person firstName={"John"} lastName={"Smith"} age={88} hair={"Brown"}></Person>
      <hr />
      <Person firstName={"Millard"} lastName={"Fillmore"} age={50} hair={"Brown"}></Person>
      <hr />
      <Person firstName={"Maria"} lastName={"Smith"} age={62} hair={"Brown"}></Person>
    </div>
  );
}

export default App;