let playerIds = [];
let playerPositions = [];

let n;
do {
    n = +prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?");
    if (!Number.isInteger(n) || n <= 0) {
        alert("Phải là số nguyên dương");
    }
} while (!Number.isInteger(n) || n <= 0);

for (let i = 0; i < n; i++) {
    let id;
    do {
        id = prompt("Nhập mã cầu thủ:");
        if (playerIds.includes(id)) {
            alert("Mã cầu thủ bị trùng!");
        }
    } while (playerIds.includes(id));
    playerIds.push(id);

    let position;
    while (true) {
        let choice = +prompt(
`--- Nhập vị trí ---
1. Thủ môn
2. Hậu vệ
3. Tiền vệ
4. Tiền đạo`);
        if (choice === 1) {
            position = "Thủ môn";
            break;
        } else if (choice === 2) {
            position = "Hậu vệ";
            break;
        } else if (choice === 3) {
            position = "Tiền vệ";
            break;
        } else if (choice === 4) {
            position = "Tiền đạo";
            break;
        } else {
            alert("Vui lòng chọn từ 1 đến 4");
        }
    }
    playerPositions.push(position);
}

printTeamRoster();

let searchPosition = prompt("Nhập vị trí cần tìm:");
let indexes = findPlayerByPosition(searchPosition);
console.log(`Chỉ số các cầu thủ ở vị trí ${searchPosition}: ${indexes}`);

function printTeamRoster() {
    for (let i = 0; i < playerIds.length; i++) {
        console.log(`${i + 1}. ${playerIds[i]} - ${playerPositions[i]}`);
    }
}

function findPlayerByPosition(position) {
    let result = [];
    for (let i = 0; i < playerPositions.length; i++) {
        if (playerPositions[i] === position) {
            result.push(i);
        }
    }
    return result;
}