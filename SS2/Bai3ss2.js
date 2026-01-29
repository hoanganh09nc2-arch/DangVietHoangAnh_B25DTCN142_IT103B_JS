let nameBook = prompt(`Tên sách: `);
let typeBook = prompt(`Thể loại sách: `);
let statusBook = prompt(`Tình trạng sách: `);
if (nameBook === `Khoa học` || nameBook === `Lịch sử`) {
    if ( statusBook === `Có` ) {
        console.log (`Sách này có sẵn trong thư viện`);
    } else {
        console.log (`Sách đã được mượn`);
    }
} else {
    console.log (`Sách này có thể đọc giải trí`);
}