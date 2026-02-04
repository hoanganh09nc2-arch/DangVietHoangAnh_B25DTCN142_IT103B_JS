let booksId = [];
let booksName = [];
let inventoryQuantity = [];
let n = Number(prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?"))
for (let i = 0; i < n; i++) {
    let id = prompt(`Nhập mã sách thứ ${i + 1}:`);
    while (!id) {
        id = prompt("Mã sách không được để trống. Nhập lại:");
    }
    let name = prompt(`Nhập tên sách thứ ${i + 1}:`);
    while (!name) {
        name = prompt("Tên sách không được để trống. Nhập lại:");
    }
    let quantity = parseInt(prompt(`Nhập số lượng tồn kho hiện tại của sách thứ ${i + 1}:`), 10);
    while (isNaN(quantity) || quantity < 0) {
        quantity = parseInt(prompt("Số lượng phải là số nguyên ≥ 0. Nhập lại:"), 10);
    }
    booksId.push(id);
    booksName.push(name);
    inventoryQuantity.push(quantity);
}
console.log("Tổng số loại sách đang kiểm tra:", booksId.length);
let lowStockCount = 0;
for (let i = 0; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] <= 5) {
        lowStockCount++;
    }
}
console.log("Số lượng sách tồn kho ≤ 5 bản:", lowStockCount);

console.log("Các mã sách đã hết hàng:");
for (let i = 0; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] === 0) {
        console.log("-", booksId[i]);
    }
}


console.log("Danh sách chi tiết:");
for (let i = 0; i < booksId.length; i++) {
    console.log(`${i + 1}. Mã: ${booksId[i]} - Tên: ${booksName[i]} - Còn: ${inventoryQuantity[i]} bản`);
}