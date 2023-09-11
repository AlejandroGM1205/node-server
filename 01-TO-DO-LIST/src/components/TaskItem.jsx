import "../styles/task-item.css";

export const TaskItem = ({ task, onCompleted }) => {

  const getStyle = () => {
    return {
      textDecoration: task.completed ? "line-through" : "none",
    };
  };

  return (
    <div className="task-item" style={getStyle()}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onCompleted(task.id)}
      />
      {task.task}
      <button className="mod-btn"></button>
      <button className="del-btn"></button>
    </div>
  );
};
