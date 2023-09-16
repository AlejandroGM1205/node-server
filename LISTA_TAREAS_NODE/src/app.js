const readline = require('readline-sync')
const { viewTasks, addTask, completeTask, deleteTask, showMenu } = require('./utilities/functions')

let tasks = [];

let choice = 0;

while (choice !== 5) {
    showMenu();

    choice = readline.questionInt('\nElige una opcion: ');

    switch (choice) {
        case 1:
            viewTasks(tasks);
            break;
        case 2:
            addTask(tasks);
            break;
        case 3:
            completeTask(tasks);
            break;
        case 4:
            deleteTask(tasks);
            break;
        case 5:
            console.log('Saliendo del programa.');
            break;
        default:
            console.log('Opcion invalida. Intentalo de nuevo.');
            break;
    }
}
