import { Tasks } from "./components/Tasks";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";

export function App() {

  return (
    <div className="Screen">
      <div className="App">
          < Header />
          < NewTask />
          <Tasks />
      </div>
    </div>
  )
}

