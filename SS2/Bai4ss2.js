let nameBook = prompt(`Tên sách: `);
let namelend = prompt(`tên người mượn: `);
let rateFavorite = +prompt(`mức độ yêu thích`);
switch (rateFavorite) {
    case 1:
    case 2:
        console.log(`Sách này bạn có thể cân nhắc mượn lại sau`);
        break;
    case 3:
        console.log (`Sách này khá ổn, có thể mượn`);
        break;
    case 4:
    case 5:
        console.log (`Sách này bạn có thể cân nhắc mượn lại sau`);
        break;
}