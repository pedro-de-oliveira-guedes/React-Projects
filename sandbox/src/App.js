import "./components/UserData"
import { DisplayName, DisplayAge, TaskList } from "./components/UserData";

function App() {
  return (
    <div>
        <h1>
            Pedro?
        </h1>
        <DisplayName name="Pedro"/>
        <DisplayAge />
        <TaskList />
    </div>
  );
}

export default App;
