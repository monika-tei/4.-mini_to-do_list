import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
      task: "Milk the cat",
      completed: false,
      id: 1,
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
    // uuidv4();
    //state manipulation time!
    //concat / take the old state and add the new one at the end
    setTasks((oldTasks) => oldTasks.concat(newTask));
  }

  function completeTask() {
    setTasks((oldState) => oldState.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <Form addTask={addTask} />
      <List tasks={tasks} completeTask={completeTask} />
    </div>
  );
}

export default App;
