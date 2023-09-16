const readline = require('readline-sync')

function showMenu() {
    console.log('\nMenu');
    console.log('1. Ver tareas');
    console.log('2. Añadir tarea');
    console.log('3. Completar tarea');
    console.log('4. Eliminar tarea');
    console.log('5. Salir')
}

function viewTasks(tasks) {
    console.log('Lista de tareas: ');
    if (tasks.length === 0){
        console.log('\nLista de tareas vacia\n')
    } else {
        tasks.forEach((task,index)=> {
            console.log(`${index+1}. 
            [${task.completed ? '✔' : ' '}] 
            ${task.description}`);
        });
    }
}

function addTask(tasks) {
    const description = readline.question('Introduce la descripcion de la tarea: ');
    const task = {description, completed: false}
    tasks.push(task);
    console.log('Tarea añadida correctamente')
}

function completeTask(tasks) {
    const index = readline.questionInt('Introduce el numero de la tarea a completar: ') -1;
    if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        console.log('Tarea marcada como completada.');
    } else {
        console.log('Numero de tarea invalido.');
    }
}

function deleteTask(tasks) {
    const index = readline.questionInt('Introduce el numero de la tarea a eliminar: ') - 1;
    if (index >=0 && index < tasks.length) {
        tasks.splice(index, 1);
        console.log('Tarea eliminada correctamente.')
    } else {
        console.log('Numero de taria inválio.')
    }
}

module.exports = {
    viewTasks,
    addTask,
    completeTask,
    deleteTask,
    showMenu
};