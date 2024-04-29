import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMySame from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const name = "Maitê"

  return (
    <div className="App">
      <HelloWorld/ >
      <SayMySame name = "Eduardo"/>
      <SayMySame name = "Yasmim"/>
      <SayMySame name = {name}/>
      <Pessoa name="Eduardo" age="17" job="Programmer" foto="https://via.placeholder.com/150"/>
    </div>

  );
}

export default App;
