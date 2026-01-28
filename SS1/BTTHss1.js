let bookName = prompt("Nhập tên sách:").trim().toUpperCase();
let name = prompt("Nhập tên tác giả:").toUpperCase();
let yearPublish = prompt("Nhập năm xuất bản:");
let price = prompt("Nhập giá tiền một cuốn:");
let number = prompt("Nhập số lượng nhập kho:");

let randomID = Math.floor(Math.random() * 1000) + 1;
let bookID = `${name.slice(0,3)}${yearPublish}-${randomID}`;
let year = 2026;
let bookage = year - Number(yearPublish);
let result = Number(price) * Number(number);
let nganKe = Math.floor(Math.random() * 10) + 1;

console.log(`
    --- PHIẾU NHẬP KHO ---
    Mã sách: ${bookID}
    Tên sách: ${bookName}
    Tác giả: ${name}
    Năm xuất bản: ${yearPublish}
    Tuổi sách: ${bookage} năm
    Tổng giá trị: ${result} VNĐ
    Ngăn kệ gợi ý: Kệ số ${nganKe}
`);
