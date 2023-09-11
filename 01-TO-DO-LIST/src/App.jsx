import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { useEffect, useState } from "react";
import data from "./data.json";

function App() {
  //Constante con la que inicializar el estado de las tareas
  const dataInit = (() => {
    const localStorageData = localStorage.getItem("tasks");
    const storedTasks = JSON.parse(localStorageData);
    
    return storedTasks ? storedTasks : data;
  })
  //Inicializando estado de tareas
  const [tasks, setTasks] = useState(dataInit)
  //Funcion para el estado de las tareas junto con un setTasks
  const onCompleted = (id) => {
    console.log("task", id);
    setTasks(
      tasks.map((task) => {
        return task.id === Number(id)
          ? { ...task, completed: !task.completed }
          : { ...task };
      })
    );
  };
  //Efecto para guardar mis tareas cada vez que se modificaba alguna
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("Guardado en el almacenamiento:", tasks);
  }, [tasks]);

  return (
    <>
      <div className="todo-App">
        <h2>Todo App</h2>
        <TaskForm />
        <TaskList tasks={tasks} onCompleted={onCompleted} />
      </div>
    </>
  );
}

export default App;
