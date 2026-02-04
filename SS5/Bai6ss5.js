let readerCardIds = [];
let readerNames = [];
let borrowedBookCodes = [];
let overdueDays = [];

let n = Number(prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn?"));
while (isNaN(n) || n <= 0) {
    n = Number(prompt("Vui lòng nhập số nguyên dương!"));
}

for (let i = 0; i < n; i++) {
    let cardId = "";
    let check;
    do {
        check = false;
        cardId = prompt("Nhập mã thẻ bạn đọc thứ " + (i + 1) + ":");
        for (let j = 0; j < readerCardIds.length; j++) {
            if (readerCardIds[j] === cardId) {
                check = true;
                alert("Mã thẻ đã tồn tại!");
                break;
            }
        }
    } while (cardId === "" || check);

    let name = "";
    while (name === "") {
        name = prompt("Nhập tên bạn đọc thứ " + (i + 1) + ":");
    }

    let books = "";
    while (books === "") {
        books = prompt("Nhập các mã sách đang mượn (cách nhau bởi dấu phẩy):");
    }

    let days;
    do {
        days = Number(prompt("Nhập số ngày quá hạn:"));
    } while (isNaN(days) || days < 0);

    readerCardIds.push(cardId);
    readerNames.push(name);
    borrowedBookCodes.push(books);
    overdueDays.push(days);
}

let count10 = 0;
for (let i = 0; i < overdueDays.length; i++) {
    if (overdueDays[i] >= 10) {
        count10++;
    }
}

let bothJsPyt = [];
for (let i = 0; i < borrowedBookCodes.length; i++) {
    let s = borrowedBookCodes[i].toUpperCase();
    if (s.includes("JS") && s.includes("PYT")) {
        bothJsPyt.push(readerCardIds[i]);
    }
}

let maxIndex = 0;
for (let i = 1; i < overdueDays.length; i++) {
    if (overdueDays[i] > overdueDays[maxIndex]) {
        maxIndex = i;
    }
}

let count7 = 0;
for (let i = 0; i < overdueDays.length; i++) {
    if (overdueDays[i] >= 7) {
        count7++;
    }
}

console.log("Danh sách bạn đọc quá hạn (" + n + " người):");
for (let i = 0; i < n; i++) {
    console.log(
        (i + 1) + ". Mã thẻ: " + readerCardIds[i] +
        " | Tên: " + readerNames[i] +
        " | Sách đang mượn: " + borrowedBookCodes[i] +
        " | Quá hạn: " + overdueDays[i] + " ngày"
    );
}

console.log("");
console.log("Tổng số bạn đọc quá hạn ≥ 10 ngày: " + count10);
console.log("");
console.log("Các bạn đọc đang mượn cả sách JS* và PYT*: " + bothJsPyt.join(", "));
console.log("");
console.log(
    "Bạn đọc có số ngày quá hạn cao nhất: " +
    readerNames[maxIndex] +
    " (" + overdueDays[maxIndex] + " ngày)"
);
console.log("");

if (count7 === 0) {
    console.log("Tình hình trả sách hôm nay khá tốt!");
} else if (count7 <= 4) {
    console.log("Cần gửi nhắc nhở cho một số bạn đọc!");
} else {
    console.log("Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!");
}