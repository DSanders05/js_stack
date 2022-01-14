// import logo from './logo.svg';
import './App.css';
import PersonCard from './Components/PersonCard';

function App() {
  return (
    <div className="App">
      {/* information you pass down to a componenet is called props or properties */}
      <PersonCard firstName= {"Drak"} lastName= {"Person"} age={26} hairColor= {"Brown"}></PersonCard>
      <hr />
      <PersonCard firstName= {"Mac"} lastName={"Donald"} age={18} hairColor= {"Black"}></PersonCard>
      <hr />
      <PersonCard firstName= {"Paige"} lastName= {"Books"} age={42} hairColor= {"Red"}></PersonCard>

    </div>
  );
}

export default App;