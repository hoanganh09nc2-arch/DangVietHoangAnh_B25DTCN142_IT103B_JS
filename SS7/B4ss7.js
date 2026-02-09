let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn",
];

function printTeamRoster() {
    console.log("STT | Mã | Tên | Vị trí");
    players.forEach((player, index) => {
        let [id, name, position] = player.split("-");
        console.log(`${index + 1}. ${id} | ${name} | ${position}`);
    });
}

function countPlayerByPosition(players) {
    let result = {};
    for (let i = 0; i < players.length; i++) {
        let position = players[i].split("-")[2];
        if (result[position] === undefined) {
            result[position] = 1;
        } else {
            result[position]++;
        }
    }
    return result;
}

function hasGoalkeeper(players) {
    for (let i = 0; i < players.length; i++) {
        let position = players[i].split("-")[2];
        if (position === "Thủ môn") {
            return true;
        }
    }
    return false;
}

printTeamRoster();
console.log("Số lượng theo vị trí:", countPlayerByPosition(players));
console.log("Có thủ môn không:", hasGoalkeeper(players));