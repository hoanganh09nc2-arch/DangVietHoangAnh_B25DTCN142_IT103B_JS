let n = 50;
let count = 0;
for(let i = 1; i <= n; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} là FizzBuzz`)
    } else if(i % 3 === 0 && i % 5 !== 0) {
        console.log(`${i} là Fizz`);
        count += i;
    } else if(i % 5 === 0 && i % 3 !== 0) {
        console.log(`${i} là Buzz`)
    } else {
        console.log(`${i}`)
    }
}

console.log(`Tổng = ${count}`)