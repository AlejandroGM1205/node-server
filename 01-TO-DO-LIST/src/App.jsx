import {TaskForm} from "./components/TaskForm"
import {TaskList} from "./components/TaskList"
import {useState} from "react"
import data from "./data.json"


function App() {

const [tasks, setTasks] = useState(data)

const onCompleted = (id) =>{
  console.log('task', id)

  setTasks(tasks.map((task) => {
    return task.id === Number(id) ? {...task, completed: !task.completed} : {...task}
  }))
}
  return (
    <>
    <div className="todo-App">
      <h2>Todo App</h2>
      <TaskForm />
      <TaskList tasks={tasks} onCompleted={onCompleted}/>
    </div>      
    </>
  )
}

export default App
