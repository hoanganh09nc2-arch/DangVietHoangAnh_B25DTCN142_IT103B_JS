let listNamePlayer = [];
let listGoal = [];

function addPlayer(name, goal) {
    let addQuantity = +prompt("Nhập số lượng cầu thủ cần thêm : ");
    for (let i = 1; i <= addQuantity; i++) {
        name = prompt(`Nhập tên cầu thủ thứ ${i} :`)
        goal = +prompt("Nhập số bàn thắng : ");
        listNamePlayer.push(name);
        listGoal.push(goal);
    }
    console.log("ĐÃ THÊM CẦU THỦ !");
}

function showSquad() {
    if (listNamePlayer.length === 0) {
        console.log("Đội hình chưa có cầu thủ nào !");
        return;
    }

    console.log("--- DANH SÁCH ĐỘI BÓNG ---");
    for (let i = 0; i < listNamePlayer.length; i++) {
        console.log(`${i + 1}. ${listNamePlayer[i]} - ${listGoal[i]} bàn`);
    }
}

const getTotalGoals = function () {
    let totalGoal = 0;
    for (let goals of listGoal) {
        totalGoal += goals;
    }
    return totalGoal;
}

function findMostGoals() {
    if (listGoal.length === 0) {
        console.log("Không có bàn thắng nào !");
        return;
    }

    let maxGoal = listGoal[0];
    let index = 0;

    for (let i = 1; i < listGoal.length; i++) {
        if (listGoal[i] > maxGoal) {
            maxGoal = listGoal[i];
            index = i;
        }
    }

    console.log(`Vua phá lưới: ${listNamePlayer[index]} - ${maxGoal} bàn`);
}

let choice;
do {
    choice = +prompt("--- QUẢN LÝ ĐỘI BÓNG ---\n" +
        "1. Nhập cầu thủ mới\n" +
        "2. Xem danh sách đội hình\n" +
        "3. Xem thành tích toàn đội\n" +
        "4. Tìm Vua phá lưới\n" +
        "5. Thoát\n" +
        "Nhập lựa chọn (1-5) : "
    );

    switch (choice) {
        case 1: {
            addPlayer();
            alert("ĐÃ THÊM THÀNH CÔNG !");
            break;
        }

        case 2: {
            showSquad();
            alert("HIỂN THỊ ĐỘI HÌNH THÀNH CÔNG !");
            break;
        }

        case 3: {
            let totalGoal = getTotalGoals();
            console.log("Tổng số bàn thắng của cả đội là : " + totalGoal);
            alert("TÍNH TỔNG BÀN THẮNG THÀNH CÔNG !");
            break;
        }

        case 4: {
            findMostGoals();
            break;
        }
        case 5: {
            alert("Hẹn gặp lại !");
            break;
        }
        default: {
            alert("Lựa chọn không hợp lệ ! Hãy Nhập lại !");
        }
    }
} while (choice !== 5);