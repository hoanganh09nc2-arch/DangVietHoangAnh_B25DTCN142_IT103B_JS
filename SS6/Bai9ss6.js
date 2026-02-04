let arr = [];

while (true) {
    let choice = prompt(
        `                MENU 
        1. Nhập số phần tử cần nhập và giá trị các phần tử
        2. In ra giá trị các phần tử đang quản lý
        3. In ra các phần tử chẵn và tính tổng
        4. In ra giá trị lớn nhất và nhỏ nhất trong mảng
        5. In ra các phần tử là số nguyên tố và tính tổng
        6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
        7. Thêm một phần tử vào vị trí chỉ định
        8. Thoát
        Lựa chọn của bạn:`);

    choice = parseInt(choice);

    switch (choice) {

        case 1: {
            let n = parseInt(prompt("Nhập số phần tử n:"));
            if (n <= 0) {
                alert("Số lượng phần tử không hợp lệ");
                break;
            }
            arr = [];
            for (let i = 0; i < n; i++) {
                arr.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`)));
            }
            alert("Nhập mảng thành công!");
            break;
        }

        case 2: {
            alert("Các phần tử trong mảng: " + arr.join(", "));
            break;
        }

        case 3: {
            let sum = 0;
            let evenArr = [];
            for (let x of arr) {
                if (x % 2 === 0) {
                    evenArr.push(x);
                    sum += x;
                }
            }
            alert(`Các phần tử chẵn: ${evenArr.join(", ")}\nTổng: ${sum}`);
            break;
        }

        case 4: {
            if (arr.length === 0) {
                alert("Mảng rỗng");
                break;
            }
            let max = arr[0];
            let min = arr[0];
            for (let x of arr) {
                if (x > max) max = x;
                if (x < min) min = x;
            }
            alert(`Giá trị lớn nhất: ${max}\nGiá trị nhỏ nhất: ${min}`);
            break;
        }

        case 5: {
            function isPrime(n) {
                if (n < 2) return false;
                for (let i = 2; i <= Math.sqrt(n); i++) {
                    if (n % i === 0) return false;
                }
                return true;
            }

            let primes = [];
            let sum = 0;
            for (let x of arr) {
                if (isPrime(x)) {
                    primes.push(x);
                    sum += x;
                }
            }
            alert(`Số nguyên tố: ${primes.join(", ")}\nTổng: ${sum}`);
            break;
        }

        case 6: {
            let value = parseInt(prompt("Nhập số cần thống kê:"));
            let count = 0;
            for (let x of arr) {
                if (x === value) count++;
            }
            alert(`Số ${value} xuất hiện ${count} lần`);
            break;
        }

        case 7: {
            let value = parseInt(prompt("Nhập giá trị cần thêm:"));
            let index = parseInt(prompt("Nhập vị trí cần thêm:"));

            if (index < 0 || index > arr.length) {
                alert("Vị trí không hợp lệ");
            } else {
                arr.splice(index, 0, value);
                alert("Thêm phần tử thành công!");
            }
            break;
        }

        case 8:
            alert("Thoát chương trình");
            break;

        default:
            alert("Lựa chọn không hợp lệ!");
    }

    if (choice === 8) break;
}
