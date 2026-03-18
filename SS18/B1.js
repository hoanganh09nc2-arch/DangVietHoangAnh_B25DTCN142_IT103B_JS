
const todos = [
{ id: 1, task: "Mua bánh chưng", done: false },
{ id: 2, task: "Dọn nhà đón Tết", done: false },
{ id: 3, task: "Gói bánh chưng", done: false },
{ id: 4, task: "Trang trí nhà cửa", done: false },
];
let taskList = document.getElementById(`taskList`);
let display = (list) => {
    taskList.innerHTML = ``;
    list.forEach(todo => {
        taskList.innerHTML += `
        <div class="task">
                <div>${todo.task}</div>
                <div>${todo.done ? `Đã làm` : `Chưa làm`}</div>
        </div>
    `;
    });
}
let data = localStorage.getItem("myTodos");
if(data){
    let storage = JSON.parse(data);
    display(storage);
}else{
    display(todos);
    LocalStorage.setItem("myTodos", JSON.stringify(todos));
}
