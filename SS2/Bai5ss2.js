let nameBook = prompt(`Tên sách: `);
let statusBook = prompt(`Tình trạng sách: `);
let releaseYear = +prompt("Năm xuất bản : ");
switch (statusBook) {
    case `Có sẵn`:
        if (((2026 - releaseYear) >= 0) && ((2026 - releaseYear) <= 5)) {
            console.log (`Sách này mới và có sẵn để mượn`);
        } else {
            console.log (`Sách này có sẵn nhưng đã lâu năm`);
        }
        break;
    case `Đã mượn`:
        if (((2026 - releaseYear) >= 0) && ((2026 - releaseYear) <= 10)) {
            console.log (`Sách này đã mượn nhưng khá mới, có thể mượn lại sau`);
        } else {
            console.log (`Sách này đã mượn và khá cũ`);
        }
        break;
}