let booksId = [];
let booksName = [];
let bookStatus = [];

let n;
do {
    n = prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay?");
} while (n <= 0);

for (let i = 0; i < n; i++) {
    let id = "";
    let name = "";
    let status = "";
    let choice;

    do {
        id = prompt("Nhập mã sách:");
    } while (id === "");

    do {
        name = prompt("Nhập tên sách:");
    } while (name === "");

    do {
        choice = prompt("Chọn tình trạng:\n1. Hỏng nhẹ\n2. Hỏng nặng\n3. Cần sửa gấp");
    } while (choice != 1 && choice != 2 && choice != 3);

    if (choice == 1) status = "Hỏng nhẹ";
    if (choice == 2) status = "Hỏng nặng";
    if (choice == 3) status = "Cần sửa gấp";

    booksId.push(id);
    booksName.push(name);
    bookStatus.push(status);
}

console.log("Danh sách ban đầu");
for (let i = 0; i < booksId.length; i++) {
    console.log(booksId[i], booksName[i], bookStatus[i]);
}

let menu;
do {
    menu = prompt("1. Sửa tình trạng\n2. Xóa sách\n0. Kết thúc");

    if (menu == 1) {
        let findId = prompt("Nhập mã sách cần sửa");
        let index = -1;

        for (let i = 0; i < booksId.length; i++) {
            if (booksId[i] == findId) {
                index = i;
            }
        }

        if (index != -1) {
            let newChoice;
            do {
                newChoice = prompt(
                    "1. Hỏng nhẹ\n2. Hỏng nặng\n3. Cần sửa gấp\n4. Đã sửa xong\n5. Loại bỏ"
                );
            } while (newChoice < 1 || newChoice > 5);

            if (newChoice == 1) bookStatus[index] = "Hỏng nhẹ";
            if (newChoice == 2) bookStatus[index] = "Hỏng nặng";
            if (newChoice == 3) bookStatus[index] = "Cần sửa gấp";
            if (newChoice == 4) bookStatus[index] = "Đã sửa xong";
            if (newChoice == 5) bookStatus[index] = "Loại bỏ";
        }
    }

    if (menu == 2) {
        let deleteId = prompt("Nhập mã sách cần xóa");
        let pos = -1;

        for (let i = 0; i < booksId.length; i++) {
            if (booksId[i] == deleteId) {
                pos = i;
            }
        }

        if (pos != -1) {
            booksId.splice(pos, 1);
            booksName.splice(pos, 1);
            bookStatus.splice(pos, 1);
        }
    }

    if (menu != 0) {
        console.log("Danh sách hiện tại");
        for (let i = 0; i < booksId.length; i++) {
            console.log(booksId[i], booksName[i], bookStatus[i]);
        }
    }

} while (menu != 0);

let fixed = 0;
let removed = 0;

for (let i = 0; i < bookStatus.length; i++) {
    if (bookStatus[i] == "Đã sửa xong") fixed++;
    if (bookStatus[i] == "Loại bỏ") removed++;
}

console.log("Báo cáo cuối");
console.log("Số sách còn lại:", booksId.length);
console.log("Đã sửa xong:", fixed);
console.log("Loại bỏ:", removed);

for (let i = 0; i < booksId.length; i++) {
    console.log(booksId[i], booksName[i], bookStatus[i]);
}