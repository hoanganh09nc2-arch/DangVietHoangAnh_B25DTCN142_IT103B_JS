let playerIds = ["P001", "P002", "P003", "P004", "P005"];
let playerNames = [
    "Nguyễn Văn A",
    "Trần Thị B",
    "Lê Văn C",
    "Phạm Văn D",
    "Hoàng Thị E",
];
let playerJerseyNumbers = [10, 7, 8, 9, 11];

function printTeamRoster() {
    console.log("===== DANH SÁCH ĐỘI BÓNG =====");
    for (let i = 0; i < playerIds.length; i++) {
        console.log(
            `${i + 1}. Mã: ${playerIds[i]} | Tên: ${playerNames[i]} | Số áo: ${playerJerseyNumbers[i]}`
        );
    }
}

function updatePlayer(playerId, newName, newJerseyNumber) {
    let index = playerIds.indexOf(playerId);
    if (index === -1) return false;

    playerNames[index] = newName;
    playerJerseyNumbers[index] = newJerseyNumber;
    return true;
}

printTeamRoster();

let updateId = prompt("Nhập mã cầu thủ muốn cập nhật (ví dụ: P001):");
let newName = prompt("Nhập tên mới cho cầu thủ:");

let newJerseyNumber;
do {
    newJerseyNumber = +prompt("Nhập số áo mới (từ 1 đến 99):");
} while (!Number.isInteger(newJerseyNumber) || newJerseyNumber < 1 || newJerseyNumber > 99);

let result = updatePlayer(updateId, newName, newJerseyNumber);

if (result) {
    alert("Cập nhật thành công!");
    printTeamRoster();
} else {
    alert("Không tìm thấy cầu thủ với mã này!");
}