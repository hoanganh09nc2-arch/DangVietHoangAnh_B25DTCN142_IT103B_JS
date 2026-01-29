let nameBook = prompt(`Tên sách: `);
let namelend = prompt(`Tên người mượn: `);
let haveCard = prompt(`Có thẻ không: `);
let statusBook = prompt(`Tình trạng sách: `);
let daySend = +prompt(`Số ngày mượn: `);
switch (statusBook) {
    case `có sẵn` :
        if (haveCard === `có`) {
            console.log(`Chúc mừng, bạn có thể mượn sách này`);
        } else {
            console.log(`Bạn không thể mượn sách nếu không có thẻ thư viện`);
        }
        break;
    case `đã mượn` :
        if ((daySend < 30) && (haveCard === `có`)) {
            console.log(`Sách đang được mượn, vui lòng đợi đến khi trả lại`);
        } else if ((daySend < 30) && (haveCard === `không`)) {
            console.log(`Bạn không thể mượn sách nếu không có thẻ thư viện`);
        }
        break;
    case `không có sẵn` :
        console.log(`Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau`)
        break;
    default:
        console.log(`Thông tin không hợp lệ, vui lòng nhập lại`);
        break;
}
