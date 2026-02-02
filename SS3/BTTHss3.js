let password;
let count = 0;
let isLogin = false;

while (count < 3) {
    password = prompt("Nhập mật khẩu:");
    if (password === "admin123") {
        console.log("Đăng nhập thành công");
        isLogin = true;
        break;
    } else {
        count++;
        console.log("Sai mật khẩu. Lần còn lại:", 3 - count);
    }
}

if (!isLogin) {
    console.log("Hệ thống bị khóa!");
} else {
    while (true) {
        let choice = prompt(
            "===== MENU =====\n" +
            "1. Nhập lô sách mới\n" +
            "2. Vẽ sơ đồ kệ sách\n" +
            "3. Thoát\n" +
            "Nhập lựa chọn (1-3):"
        );
        switch (choice) {
            case "1": {
                let inputBook = Number(prompt("Bạn muốn nhập bao nhiêu cuốn sách?"));
                let totalPrice = 0;
                for (let i = 1; i <= inputBook; i++) {
                    let price = Number(prompt("Nhập giá tiền cuốn sách thứ " + i));
                    if (price <= 0 || isNaN(price)) {
                        console.log("Giá không hợp lệ, bỏ qua cuốn này");
                        continue;
                    }
                    totalPrice += price;
                }

                console.log("Tổng giá trị nhập kho:", totalPrice);
                break;
            }
            case "2": {
                for (let area = 1; area <= 3; area++) {
                    for (let shelf = 1; shelf <= 5; shelf++) {
                        if (area === 2 && shelf === 3) {
                            console.log(`Khu vực ${area} - Kệ ${shelf} (Đang sửa chữa)`);
                            continue;
                        }
                        console.log(`Khu vực ${area} - Kệ ${shelf}`);
                    }
                }
                break;
            }
            case "3":
                console.log("Hẹn gặp lại!");
                break;
            default:
                console.log("Lựa chọn không hợp lệ!");
        }
    }
}