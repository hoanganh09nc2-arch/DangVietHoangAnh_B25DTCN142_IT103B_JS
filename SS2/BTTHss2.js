let name = prompt("Nhập tên người dùng");
let role = prompt("Nhập vai trò");
let money = prompt("Nhập số tiền");
let state = prompt("Nhập trạng thái thẻ");
let day = +prompt("Số ngày quá hạn trả sách");
let right, result, price;

switch (role) {
    case "admin":
        right="Chào Admin, bạn có toàn quyền hệ thống";
        break;
    case "student":
        right="Chào sinh viên, bạn có thể mượn sách";
        break;
    case "guest":
        right="Chào khách, bạn chỉ có thể đọc tại chỗ";
        break;
    default:
        right="Lỗi: Vai trò không hợp lệ!";
        break;
}

if (name == "") {
    result = "YÊU CẦU BỊ TỪ CHỐI: Tên không được để trống";
} else if (role == "guest") {
    result = "YÊU CẦU BỊ TỪ CHỐI: Vai trò phải là student HOẶC admin";
} else if (money < 0) {
    result = "YÊU CẦU BỊ TỪ CHỐI: Số dư tài khoản phải lớn hơn 0";
} else if (state != "true" ) {
    result = "YÊU CẦU BỊ TỪ CHỐI: Trạng thái thẻ phải là true (Hoạt động)";
} else {
    result = " ĐƯỢC PHÉP MƯỢN SÁCH";
}

if (day <= 0) {
    price = "Cảm ơn bạn đã trả đúng hạn";
} else if (1<= day && day <=5) {
    price =5000*day +"VNĐ";
    money = money- 5000*day;
} else if (1<= day && day <=5) {
    price =10000*day +"VNĐ";
    money = money- 10000*day;
} else {
    price = 200000 +"VNĐ";
}

console.log(`
    --- PHIẾU NHẬP KHO ---
    Người dùng: ${name}
    Quyền hạn: ${right}
    Kết quả mượn: ${result}
    Tình trạng trả sách: Qúa hạn ${day} ngày
    Tiền phạt: ${price}
`);