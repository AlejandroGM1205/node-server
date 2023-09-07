import "../styles/task-list.css"; 
import { TaskItem } from "./TaskItem";



export const TaskList = ({tasks, onCompleted}) =>{
        return(
        <div className="task-list-container">
                {
                    tasks.map((task, index) => (
                        <TaskItem key={`task-${index}`} task={task} onCompleted={onCompleted}/>
                    ))
                }
                <div className="footer-list">
                    <div className="tasks-left">You have {2} pending tasks</div>
                    <button className="clear-all"><b>Clear All</b></button>
                </div>
        </div>
    )
}