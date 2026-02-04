let n = parseInt(prompt("Nhập số lượng phần tử n:"));

if (n < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
    console.log("Mảng không có phần tử nào");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`)));
    }

    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    let secondMax = null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < max) {
            if (secondMax === null || arr[i] > secondMax) {
                secondMax = arr[i];
            }
        }
    }

    console.log("Mảng đã nhập:", arr);
    console.log("Số lớn thứ hai trong mảng là:", secondMax);
}
