let totalFeedbacks = 0;
let seriousComplaints = 0;
let mediumComplaints = 0;
let lightComplaints = 0;
let improvementSuggestions = 0;
let positiveFeedbacks = 0;

while (true) {
  let continueWork = prompt(
    "Có khiếu nại/phản hồi mới từ bạn đọc không? (có/không)"
  );

  if (continueWork === "không") {
    break;
  }

  if (continueWork !== "có") {
    console.log("Nhập sai, vui lòng nhập lại.");
    continue;
  }

  let readerName = prompt("Nhập tên bạn đọc:");
  if (readerName === "") {
    console.log("Tên bạn đọc không được để trống.");
    continue;
  }

  let cardCode = prompt("Nhập mã thẻ bạn đọc (có thể để trống):");
  let feedbackType = +prompt(
    "Nhập loại phản hồi:\n1 - Khiếu nại\n2 - Đề xuất cải thiện\n3 - Phản hồi tích cực"
  );

  let severityLevel = 0;
  if (feedbackType === 1) {
    severityLevel = +prompt(
      "Nhập mức độ nghiêm trọng:\n1 - Nhẹ\n2 - Trung bình\n3 - Nghiêm trọng"
    );
  }

  let content = prompt("Nhập nội dung ngắn gọn:");

  totalFeedbacks++;

  if (feedbackType === 1 && severityLevel === 3) {
    console.log("→ Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng");
    seriousComplaints++;
  } else if (feedbackType === 1 && severityLevel === 2) {
    console.log("→ Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình");
    mediumComplaints++;
  } else if (feedbackType === 1 && severityLevel === 1) {
    console.log("→ Xử lý ngay tại quầy - Khiếu nại nhẹ");
    lightComplaints++;
  } else if (feedbackType === 2) {
    console.log("→ Cảm ơn! Đề xuất đã được ghi nhận");
    improvementSuggestions++;
  } else if (feedbackType === 3) {
    console.log("→ Cảm ơn bạn đã phản hồi tích cực!");
    positiveFeedbacks++;
  } else {
    console.log("Phản hồi không hợp lệ.");
  }
}

console.log("===== BÁO CÁO CUỐI CA =====");
console.log("Tổng số phản hồi/khiếu nại đã xử lý:", totalFeedbacks);
console.log("Số khiếu nại nghiêm trọng:", seriousComplaints);
console.log("Số khiếu nại trung bình:", mediumComplaints);
console.log("Số khiếu nại nhẹ:", lightComplaints);
console.log("Số đề xuất cải thiện:", improvementSuggestions);
console.log("Số phản hồi tích cực:", positiveFeedbacks);