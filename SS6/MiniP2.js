console.log("CÂU 1:")
let str = "Quý, Nam, Lan, Hùng, Nam";
let students = str.split(", "); 
console.log("students ban đầu:", students);

students.reverse();
console.log("students khi đảo ngược:", students);

if (students.includes("Lan")) {
    console.log("Tên Lan tồn tại");
} else {
    console.log("Tên Lan không tồn tại trong mảng");
}

let indexOfNam = students.indexOf("Nam");
console.log("Vị trí đầu tiên của 'Nam' trong mảng hiện tại là:", indexOfNam);

console.log("CÂU 2:")
let prices = [100, 200, 300, 400];
console.log("for...of");
for (let price of prices) {
    console.log(price);
}

console.log("for...in");
for (let index in prices) {
    console.log(index);
}

let sum = 0;
console.log("for truyền thống");
for (let i = 0; i < prices.length; i++) {
    if (i % 2 === 0) {
        sum += prices[i];
    }
}
console.log("Tổng các phần tử ở vị trí index chẵn là:", sum);