let books=[];
let booknumber = Number(prompt("bạn muốn trả bao nhiêu quyển sách"));
for(let i = 0 ; i <booknumber ;i++){
    let bookname = prompt("tên cuốn sách thứ " +(i+1)+" :" );
    books.push(bookname);
}
document.write("tổng số sách được trả là: " + books.length +"<br>");
document.write("những cuốn sách đã được trả là: "+"<br>");
for(let i=0;i<books.length;i++){
    document.write("quyển "+(i+1)+" : "+books[i]+"<br>");
}