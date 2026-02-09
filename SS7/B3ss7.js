let players = [];

function printTeamRoster() {
    console.log("===== DANH SÁCH ĐỘI BÓNG =====");
    for (let i = 0; i < players.length; i++) {
        let [id, name, position] = players[i].split("-");
        console.log(`${i + 1}. Mã: ${id} | Tên: ${name} | Vị trí: ${position}`);
    }
}

function pushPlayer(id, name, position) {
    players.push(id + "-" + name + "-" + position);
}

let n;
do {
    n = +prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?");
} while (!Number.isInteger(n) || n <= 0);

for (let i = 0; i < n; i++) {
    let playerId;
    do {
        playerId = prompt(`Nhập mã cầu thủ thứ ${i + 1}:`);
    } while (
        playerId === "" ||
        players.some(p => p.startsWith(playerId + "-"))
    );

    let playerName;
    do {
        playerName = prompt("Nhập tên cầu thủ:");
    } while (playerName === "");

    let positionNumber;
    do {
        positionNumber = +prompt(
            "Chọn vị trí:\n1. Thủ môn\n2. Hậu vệ\n3. Tiền vệ\n4. Tiền đạo"
        );
    } while (positionNumber < 1 || positionNumber > 4);

    let positions = ["Thủ môn", "Hậu vệ", "Tiền vệ", "Tiền đạo"];
    let positionText = positions[positionNumber - 1];

    pushPlayer(playerId, playerName, positionText);
}

printTeamRoster();