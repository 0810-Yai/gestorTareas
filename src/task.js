//lista de tareas
let tasks = JSON.parse(localStorage.getItem("tasks")) || []; /almacenamiento Local en nuestro navegador/
//función para llevar las tareas
export const getTasks = () => tasks;
//función para agregar una tarea
export const addTask = (task) => {
    const newtask = {
        id: Date.now(),
        text: task,
        completed:false,
    };
    tasks.push(newtask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}