import "./components/UserData"

import './styles/poke.css'

import { DisplayName, DisplayAge, TaskList } from "./components/UserData";
import PokeList from './components/pokemons';

function App() {
  return (
    <div>
        <h1>
            Pedro?
        </h1>
        <DisplayName name="Pedro"/>
        <DisplayAge />
        <TaskList />
        <hr />
        <PokeList />
    </div>
  );
}

export default App;
