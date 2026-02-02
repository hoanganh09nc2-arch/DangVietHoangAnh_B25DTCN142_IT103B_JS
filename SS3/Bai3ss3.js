let amountBook = 0;
let bookLost = 0;
let bookEnd = 0;
do {
    let decide = prompt(`Tiếp tục kiểm kê sách tiếp theo? (có/không)`);
    if (decide === `không`) {
        break;
    }
    let nameBook = prompt(`Tên sách: `);
    let idBook;
    do {
        idBook = prompt(`Mã sách: `);
        if (typeof idBook === "string" && idBook.trim() !== "") {
            break;
        }
    }while(1);
    do {
        amountBook = +prompt(`Số lượng thực tế đang có trong kho: `);
        if((amountBook % 1 === 0) && (amountBook >= 0)) {
            break
        }
    } while(1);
    let statusBook = +prompt(`
        Tình trạng sách (nhập số tương ứng):
        1 - Bình thường (có thể cho mượn)
        2 - Mất (không còn trong kho)
`)
    if ( statusBook === 1 && amountBook === 0) {
        alert(`Sách hết (vẫn còn trong hệ thống)`);
        bookEnd++;
    } else if (statusBook === 1 && amountBook >= 10 ) {
        alert(`Sách tồn kho nhiều`);
    } else if (statusBook === 1 && (amountBook >= 1 && amountBook <= 9) ) {
        alert(`Sách tồn kho bình thường`);
    } else if (statusBook === 2) {
        alert(`Sách mất`);
        bookLost++;
    }
} while(1);
document.write(`
    Tổng số sách đã kiểm kê: ${amountBook} cuốn
    Số sách mất:   ${bookLost} cuốn
    Số sách hết hàng:  ${bookEnd} cuốn

`)