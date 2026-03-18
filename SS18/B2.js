
const initialTodos = [
 { id: 1, task: "Mua bánh chưng", done: true },
 { id: 2, task: "Dọn nhà đón Tết", done: true },
 { id: 3, task: "Gói bánh chưng", done: false },
 { id: 4, task: "Trang trí nhà cửa", done: false },
 { id: 5, task: "Mua phong bao lì xì", done: false },
 { id: 6, task: "Chuẩn bị mâm ngũ quả", done: false }
];

let taskList = document.getElementById("taskList");
let todos;
let data = localStorage.getItem(`myTodos`);
if(data) {
    todos = JSON.parse(data);
} else {
    todos = initialTodos;
    localStorage.setItem(`myTodos`, JSON.stringify(todos));
}
function display(){
    taskList.innerHTML =``;
    todos.forEach(todo => {
        taskList.innerHTML += `
        <div class ="task ${todo.done ? `done` : ``}" onclick="toggleTask(${todo.id})">
        ${todo.task}
        </div>
        `
    });
}
function toggleTask(id){

    todos = todos.map(todo => {
        if(todo.id === id){
            return {...todo, done: !todo.done};
        }
        return todo;
    });

    localStorage.setItem("myTodos", JSON.stringify(todos));

    display();
}

display();
