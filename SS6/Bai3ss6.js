let n = parseInt(prompt("Nhập số phần tử n:"));

if (n < 0) {
    console.log("Số lượng phần tử không hợp lệ");
} else if (n === 0) {
    console.log("Mảng không có phần tử");
} else {
    let arr = [];
    let count = 0;
    for (let i = 0; i < n; i++) {
        let value = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
        arr.push(value);
        if (value < 0) {
            count++;
        }
    }

    console.log("Mảng đã nhập:", arr);
    console.log("Số nguyên âm trong mảng:", count);
}
