let n = parseInt(prompt("Nhập số phần tử n:"));

if (n < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
    console.log("Không phải dãy số fibonacci");
} else {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`)));
    }

    let isFibonacci = true;

    if (n >= 3) {
        for (let i = 2; i < arr.length; i++) {
            if (arr[i] !== arr[i - 1] + arr[i - 2]) {
                isFibonacci = false;
                break;
            }
        }
    }

    if (isFibonacci) {
        console.log("Là dãy số fibonacci");
    } else {
        console.log("Không phải dãy số fibonacci");
    }
}
