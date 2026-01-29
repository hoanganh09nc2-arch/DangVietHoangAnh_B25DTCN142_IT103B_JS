let nameBook = prompt("Tên sách : ");
let authorBook = prompt("Tên tác giả : ");
let releaseYear = +prompt("Năm xuất bản : ");
let nowYear = 2026 ;
if (releaseYear === 2026) {
    console.log ("Đây là sách mới!");
} else if ((nowYear - releaseYear) < 5 ) {
    console.log ("Sách khá mới!");
} else if ((nowYear - releaseYear) >= 5 ) {
    console.log ("Sách đã cũ!");
}