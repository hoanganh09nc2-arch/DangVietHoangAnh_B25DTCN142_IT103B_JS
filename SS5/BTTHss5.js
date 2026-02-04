let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];
let choice;

while (1) {
    choice = +prompt(
    "--- THƯ VIỆN KHOA HỌC ---\n" +
    "1. Xem danh sách\n" +
    "2. Nhập sách mới\n" +
    "3. Mượn sách (Xóa)\n" +
    "4. Sửa tên sách\n" +
    "5. Sắp xếp kệ\n" +
    "0. Thoát\n\n" +
    "Bạn chọn:"
  );

  switch (choice) {
    case 1:
      console.log("=> Danh sách hiện tại (" + books.length + " cuốn):");
      for (let i = 0; i < books.length; i++) {
        console.log((i + 1) + ". " + books[i]);
      }
      break;

    case 2:
      let newBook = prompt("Nhập tên sách mới:");
      if (newBook !== "") {
        books.push(newBook);
        alert("Đã thêm thành công!");
      }
      break;

    case 3:
      let borrowBook = prompt("Nhập tên sách muốn mượn:");
      let indexBorrow = books.indexOf(borrowBook);

      if (indexBorrow === -1) {
        alert("Không có sách này trong kho!");
      } else {
        books.splice(indexBorrow, 1);
        alert("Đã cho mượn cuốn '" + borrowBook + "'");
      }
      break;
    case 4:
      let oldName = prompt("Nhập tên sách cần sửa:");
      let indexEdit = books.indexOf(oldName);
      if (indexEdit === -1) {
        alert("Không tìm thấy sách!");
      } else {
        let newName = prompt("Nhập tên sách mới:");
        if (newName !== "") {
          books[indexEdit] = newName;
          alert("Đã cập nhật tên sách!");
        }
      }
      break;
    case 5:
      books.sort();
      console.log("Danh sách sau khi sắp xếp:");
      for (let i = 0; i < books.length; i++) {
        console.log((i + 1) + ". " + books[i]);
      }
      break;
    case 0:
      running = false;
      alert("Thoát chương trình");
      break;
    default:
      alert("Lựa chọn không hợp lệ!");
      break;
  }
}
