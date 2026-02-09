let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn",
];

function getAllPositions() {
    let result = [];
    for (let i = 0; i < players.length; i++) {
        let position = players[i].split("-")[2];
        if (result.indexOf(position) === -1) {
            result.push(position);
        }
    }
    return result;
}

function findPlayersWithLongestName() {
    let longestName = "";
    for (let i = 0; i < players.length; i++) {
        let name = players[i].split("-")[1];
        if (name.length > longestName.length) {
            longestName = name;
        }
    }
    return longestName;
}

function countPlayersStartingWithLetter(letter) {
    let count = 0;
    let firstChar = letter.toLowerCase();

    for (let i = 0; i < players.length; i++) {
        let name = players[i].split("-")[1].toLowerCase();
        if (name.charAt(0) === firstChar) {
            count++;
        }
    }
    return count;
}

console.log("Vị trí trong đội:", getAllPositions());
console.log("Tên dài nhất:", findPlayersWithLongestName());
console.log("Số cầu thủ bắt đầu bằng 'N':", countPlayersStartingWithLetter("N"));