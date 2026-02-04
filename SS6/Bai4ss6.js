let arr = ['c', '2', 'd', '3'];

if (arr.length === 0) {
    console.log("Không có ký tự số");
} else {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            result.push(arr[i]);
        }
    }

    if (result.length === 0) {
        console.log("Không có ký tự số");
    } else {
        console.log(result.join(" "));
    }
}
