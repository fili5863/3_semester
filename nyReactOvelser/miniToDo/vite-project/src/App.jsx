import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [tasks, setTasks] = useState([
    {
      task: "Milk tha mum",
      completed: false,
      id: uuidv4(),
    },
    {
      task: "Milk tha dad",
      completed: false,
      id: uuidv4(),
    },
    {
      task: "Milk tha cat",
      completed: false,
      id: uuidv4(),
    },
  ]);

  function addTask(taskName) {
    console.log(taskName);
    const newTask = {
      task: taskName,
      completed: false,
      id: uuidv4(),
    };
    console.log(newTask);
    setTasks(oldTasks => oldTasks.concat(newTask));
  }
  function completeTask(id) {
    setTasks(oldState => oldState.filter(task => task.id !== id));
    console.log(id);
  }
  return (
    <fieldset>
      <legend>App</legend>
      <div className="App">
        <Form addTask={addTask} />
        <List tasks={tasks} completeTask={completeTask} />
      </div>
    </fieldset>
  );
}

export default App;
