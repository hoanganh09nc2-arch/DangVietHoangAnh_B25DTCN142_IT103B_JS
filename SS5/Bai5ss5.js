let booksId = [];
let booksName = [];
let booksCategory = [];
let inventoryQuantity = [];

let n = Number(prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay?"));
while (isNaN(n) || n <= 0) {
    n = Number(prompt("Vui lòng nhập số nguyên dương!"));
}

for (let i = 0; i < n; i++) {
    let id = "";
    while (id === "" || booksId.includes(id)) {
        id = prompt("Nhập mã sách thứ " + (i + 1) + ":");
        if (booksId.includes(id)) {
            alert("Mã sách đã tồn tại!");
            id = "";
        }
    }

    let name = "";
    while (name === "") {
        name = prompt("Nhập tên sách thứ " + (i + 1) + ":");
    }

    let category = "";
    while (category === "") {
        category = prompt("Nhập các thể loại của sách thứ " + (i + 1) + ":");
    }

    let quantity;
    do {
        quantity = Number(prompt("Nhập số lượng tồn kho của sách thứ " + (i + 1) + ":"));
    } while (isNaN(quantity) || quantity < 0);

    booksId.push(id);
    booksName.push(name);
    booksCategory.push(category);
    inventoryQuantity.push(quantity);
}

let countProgramming = 0;
for (let i = 0; i < booksCategory.length; i++) {
    if (booksCategory[i].toLowerCase().includes("lập trình")) {
        countProgramming++;
    }
}

let jsWebList = [];
for (let i = 0; i < booksCategory.length; i++) {
    let c = booksCategory[i].toLowerCase();
    if (c.includes("javascript") && c.includes("web")) {
        jsWebList.push(booksId[i]);
    }
}

let minIndex = 0;
for (let i = 1; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] < inventoryQuantity[minIndex]) {
        minIndex = i;
    }
}

console.log("Tổng số sách thuộc thể loại 'Lập trình': " + countProgramming);
console.log("Danh sách mã sách thuộc cả hai thể loại 'JavaScript' và 'Web':");
for (let i = 0; i < jsWebList.length; i++) {
    console.log(jsWebList[i]);
}
console.log(
    "Mã sách: " + booksId[minIndex] +
    ", Tên sách: " + booksName[minIndex] +
    ", Tồn kho: " + inventoryQuantity[minIndex]
);