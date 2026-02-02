let turn = prompt(`Hôm nay có bao nhiêu lượt mượn sách`);
let flag = 0;
let count = 0;
for (let i = 0; i < turn ; i++) {
    let nameBorrow = prompt(`Tên người mượn: ${i + 1}`);
    let nameBook = prompt(`Tên sách: `);
    let dayBorrow = 0;
    do {
        dayBorrow = +prompt(`Số ngày mượn: `);
        if ((dayBorrow % 1 !== 0) || (dayBorrow < 1)) {
            alert(`mời bạn nhập ngày phải là số nguyên và lớn hơn 1`);
            continue;
        }
        break;
    } while(1);
    if (dayBorrow <= 14) {
        console.log(`Trả đúng hạn`);
    } else if (dayBorrow >= 15 && dayBorrow <= 21) {
        console.log(`Trả muộn nhẹ + Phạt nhắc nhở`);
        count++;
    } else {
        console.log(`Quá hạn nghiêm trọng + Cần ghi biên bản phạt`);
        count++;
    }
}
console.log(`Tổng số lượt mượn: ${turn}`);
console.log(`Số lượt trả muộn ${count}`);