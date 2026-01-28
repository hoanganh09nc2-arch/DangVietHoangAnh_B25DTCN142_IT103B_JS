let name = prompt("Tên sách:")
let stt = +prompt ("Số thứ tự")

document.write("<pre>")

console.log("Tên sách gốc:" + " " + name + "\n")

console.log("Mã sách sau chuẩn hóa:" + "LIB" + "-" + name.toUpperCase() + "-" + stt)

document.write("</pre>")