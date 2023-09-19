const readline = require("readline-sync");

function showMenu() {
  console.log("\nMenu");
  console.log("1. Ver tareas");
  console.log("2. Añadir tarea");
  console.log("3. Completar tarea");
  console.log("4. Eliminar tarea");
  console.log("5. Salir");
}

function viewTasks(tasks) {
  console.log("Lista de tareas: ");
  if (tasks.length === 0) {
    console.log("\nLista de tareas vacia\n");
  } else {
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. 
            [${task.completed ? "✔" : " "}] 
            ${task.description}`);
    });
  }
}

function addTask(tasks) {
  return new Promise((resolve, reject) => {
    const description = readline.question(
      "Introduce la descripcion de la tarea: "
    );
    const task = { description, completed: false };
    tasks.push(task);
    resolve("Tarea añadida correctamente");
  });
}

function completeTask(tasks) {
  return new Promise((resolve, reject) => {
    const index =
      readline.questionInt("Introduce el numero de la tarea a completar: ") - 1;
    if (index >= 0 && index < tasks.length) {
      tasks[index].completed = true;
      resolve("Tarea marcada como completada.");
    } else {
      reject("Numero de tarea invalido.");
    }
  });
}

function deleteTask(tasks) {
  return new Promise((resolve, reject) => {
    const index =
      readline.questionInt("Introduce el numero de la tarea a eliminar: ") - 1;
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
      resolve("Tarea eliminada correctamente.");
    } else {
      reject("Numero de taria inválio.");
    }
  });
}

module.exports = {
  viewTasks,
  addTask,
  completeTask,
  deleteTask,
  showMenu,
};
