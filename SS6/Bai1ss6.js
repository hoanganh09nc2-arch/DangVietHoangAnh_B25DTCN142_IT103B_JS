let inputArr = [1, 22, 12, 8, 7, 9, 5, 2, 11, 30];
let results = [];

for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] >= 10) {
        results.push(inputArr[i]);
    }
}

if (results.length > 0) {
    console.log(results.join(" ")); 
} else {
    console.log("Không có số nào lớn hơn 10");
}