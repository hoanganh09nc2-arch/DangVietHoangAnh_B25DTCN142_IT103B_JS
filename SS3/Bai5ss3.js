let totalRequests = 0;
let successCount = 0;
let rejectCount = 0;
let pendingCount = 0;

while (true) {
    let hasRequest = prompt("Có yêu cầu đặt mượn trước mới không? (có/không)");

    if (!hasRequest) {
        console.log("Kết thúc ca làm việc.");
        break;
    }
    hasRequest = hasRequest.toLowerCase();

    if (hasRequest === "không") {
        break;
    }
    if (hasRequest !== "có") {
        console.log("Vui lòng nhập 'có' hoặc 'không'");
        continue;
    }
    totalRequests++;

    let readerName = prompt("Tên bạn đọc:");
    let bookCode = prompt("Mã sách muốn đặt trước:");
    let bookName = prompt("Tên sách (chỉ để tham khảo):");
    let waitDays = Number(prompt("Số ngày dự kiến chờ (≥ 1):"));
    let priority = Number(prompt(
        "Ưu tiên (nhập số):\n" +
        "1 = Sinh viên bình thường\n" +
        "2 = Giảng viên/Nghiên cứu sinh\n" +
        "3 = Nhân viên thư viện / Đặc cách"));

    if (waitDays > 45) {
        rejectCount++;
        console.log("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
    }else if (priority === 3) {
        successCount++;
        console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất");
    }else if (priority === 2 && waitDays <= 30) {
        successCount++;
        console.log("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
    }else if (priority === 1 && waitDays <= 21) {
        successCount++;
        console.log("Đặt trước thành công");
    }else {
        pendingCount++;
        console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
    }
}

console.log("===== BÁO CÁO CUỐI CA =====");
console.log("Tổng số yêu cầu đã xử lý:", totalRequests);
console.log("Số yêu cầu đặt trước thành công:", successCount);
console.log("Số yêu cầu bị từ chối:", rejectCount);
console.log("Số yêu cầu chờ xét duyệt:", pendingCount);