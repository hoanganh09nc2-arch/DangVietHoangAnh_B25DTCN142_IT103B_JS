let books=[];
let booknumber = Number(prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn: "));
for(let i =0;i<booknumber;i++){
    let bookname = prompt("tên cuốn sách thứ " +(i+1)+" :" );
    books.push(bookname);
}
document.write("tổng số sách bị trả muộn là: " + books.length +"<br>");
document.write("những cuốn sách bị trả muộn là: "+"<br>");
for(let i=0;i<books.length;i++){
    document.write("quyển "+(i+1)+" : "+books[i]+"<br>");
}
let countlong=0;
for(let i = 0;i<books.length;i++){
    if(books[i].length>20){
        countlong++;
    }
}
document.write("số lượng sách có tên dài hơn 20 kí tự là: "+ countlong);