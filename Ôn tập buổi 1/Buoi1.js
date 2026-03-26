
let products = JSON.parse(localStorage.getItem("products")) || [];

let inputName = document.getElementById(`title`);
let inputSinger = document.getElementById(`artist`);
let createBtn = document.getElementById(`submitBtn`);
let list = document.getElementById(`songTable`);
let formTitle = document.getElementById(`formTitle`);

let searchInput = document.getElementById(`search`);
searchInput.addEventListener(`input`, render);

createBtn.addEventListener(`click`,create);
let editId = null;

function create() {
    if (inputName.value.trim() === `` || inputSinger.value.trim() === ``) {
        alert(`Không được để trống`)
        return;
    }
    if (editId !== null) {
        products = products.map((product) =>
            product.id === editId ? { ...product, nameSong: inputName.value, nameSinger: inputSinger.value }: product
        );
        editId = null;
        formTitle.textContent = `Thêm bài hát`;
        createBtn.textContent = `Thêm`;
    } else {
        let newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1; //
        let newproduct = {
            id: newId,
            nameSong: inputName.value,
            nameSinger: inputSinger.value
        }
        products.push(newproduct);
    }
        inputName.value = "";
        inputSinger.value= "";
        localStorage.setItem("products", JSON.stringify(products));
        render();
}

function render() {
    list.innerHTML = "";

    const keyword = searchInput.value.trim().toLowerCase();
    const filtered = products.filter((product) =>
        product.nameSong.toLowerCase().includes(keyword)
    );
    filtered.forEach((product) => {
        let showList = document.createElement(`tr`)
        showList.innerHTML =`
            <td>${product.id}</td>
            <td>${product.nameSong}</td>
            <td>${product.nameSinger}</td>
            <td>
                <button onclick="editList(${product.id})">Sửa</button>
                <button onclick="deleteList(${product.id})">Xóa</button>
            </td>
        `
        list.appendChild(showList)
    });
};



function deleteList(id) {
    const confirmDel = confirm(`Bạn có chắc muốn xóa bài hát này không?`);
    if (!confirmDel) {
        return;
    }
    products = products.filter((product) => product.id !== id)
    localStorage.setItem("products", JSON.stringify(products));
    render();
}

function editList(id) {
    const product = products.find((list) => list.id === id);
    if (!product) {
        return;
    }
    inputName.value = product.nameSong;
    inputSinger.value = product.nameSinger;
    editId = id;

    formTitle.textContent = `Sửa bài hát`;
    createBtn.textContent = `Cập nhật`;
}

render();
