let n = 5;
let arr = ['a', '-2', 'd', '5', 'e'];

if (n < 0) {
    console.log("Số lượng phần tử không được âm");
} else if (n === 0) {
    console.log("Mảng không có phần tử");
} else {
    let sum = 0;
    let hasNumber = false;

    for (let i = 0; i < n; i++) {
        if (!isNaN(arr[i])) {
            sum += Number(arr[i]);
            hasNumber = true;
        }
    }

    if (!hasNumber) {
        console.log("Không có phần tử nào là số");
    } else {
        console.log(sum);
    }
}
