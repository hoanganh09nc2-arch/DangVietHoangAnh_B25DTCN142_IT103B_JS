let ammountBook = +prompt("số lượng sách trong thư viện : ");
if ( ammountBook < 10 && ammountBook > 0) {
    console.log (`Thư viện có ít sách`);
} else if ( ammountBook < 20 && ammountBook >= 10) {
    console.log (`Thư viện có số lượng sách vừa đủ`);
} else {
    console.log (`Thư viện có nhiều sách`);
}