let n = +prompt("Số lần mượn sách trong hôm nay là:");


for(let i = 0; i <= n; i++) {
    let nameUser = prompt(`Tên người mượn ${i + 1} :`);
    let nameBook = prompt("Tên sách:");
    let borrowDay = +prompt("Số ngày mượn:");
    if (borrowDay <= 14) {
        alert("Mượn thành công.")
    } else {
        alert("Thời gian vượt quá mức quy định.")
        n--;
    }
}
console.log("Tổng số lượt mượn là:", n);

