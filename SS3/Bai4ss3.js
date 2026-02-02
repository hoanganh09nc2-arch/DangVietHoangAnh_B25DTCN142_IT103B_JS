let totalBooks = 0;
let lostBooks = 0;
let outOfStockBooks = 0;
let manyStockBooks = 0;
let normalStockBooks = 0;

while (true) {
    let continueCheck = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)").toLowerCase();
    if (continueCheck === "không") {
        break;
    }
    if (continueCheck !== "có") {
        console.log("Lựa chọn không hợp lệ!");
        continue;
    }

    let bookCode = prompt("Mã sách:");
    if (bookCode.trim() === "") {
        console.log("Mã sách không được để trống!");
        continue;
    }

    let bookName = prompt("Tên sách:");
    let quantity = Number(prompt("Số lượng thực tế trong kho (≥ 0):"));
    let status = Number(prompt("Tình trạng sách:\n1 - Bình thường\n2 - Mất"));

    totalBooks++;
    if (status === 2) {
        console.log("Phân loại: Sách mất");
        lostBooks++;
    }else if (status === 1 && quantity === 0) {
        console.log("Phân loại: Sách hết (vẫn còn trong hệ thống)");
        outOfStockBooks++;
    }else if (status === 1 && quantity >= 10) {
        console.log("Phân loại: Sách tồn kho nhiều");
        manyStockBooks++;
    }else if (status === 1 && quantity >= 1 && quantity <= 9) {
        console.log("Phân loại: Sách tồn kho bình thường");
        normalStockBooks++;
    }else {
        console.log("Dữ liệu không hợp lệ!");
    }
}

console.log("----- BÁO CÁO KIỂM KÊ -----");
console.log("Tổng số sách đã kiểm kê:", totalBooks, "cuốn");
console.log("Số sách mất:", lostBooks, "cuốn");
console.log("Số sách hết hàng:", outOfStockBooks, "cuốn");
console.log("Số sách tồn kho nhiều:", manyStockBooks, "cuốn");
console.log("Số sách tồn kho bình thường:", normalStockBooks, "cuốn");