// ===== KHAI BÁO =====
const STORAGE_KEY = "products_data";

let products = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let idCounter = products.length > 0 ? products[products.length - 1].id + 1 : 1;
let editId = null;

// DOM
const form = document.getElementById("productForm");
const nameInput = document.getElementById("productName");
const categoryInput = document.getElementById("productCategory");
const priceInput = document.getElementById("productPrice");
const quantityInput = document.getElementById("productQuantity");
const descInput = document.getElementById("productDescription");

const tableBody = document.getElementById("productTableBody");
const emptyState = document.getElementById("emptyState");

const searchInput = document.getElementById("searchInput");
const filterCategory = document.getElementById("filterCategory");

const totalProducts = document.getElementById("totalProducts");
const totalValue = document.getElementById("totalValue");
const totalQuantity = document.getElementById("totalQuantity");

const submitBtn = document.getElementById("submitBtn");
const cancelBtn = document.getElementById("cancelBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const formTitle = document.getElementById("formTitle");

// ===== LƯU LOCAL =====
function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

// ===== HIỂN THỊ =====
function render(list) {
  let data = list || products;
  tableBody.innerHTML = "";

  if (data.length === 0) {
    emptyState.classList.add("show");
  } else {
    emptyState.classList.remove("show");
  }

  for (let i = 0; i < data.length; i++) {
    let p = data[i];

    let tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${p.id}</td>
      <td><strong>${p.name}</strong></td>
      <td>${p.category}</td>
      <td class="price">${formatMoney(p.price)}</td>
      <td class="quantity ${p.quantity < 10 ? "low-stock" : ""}">${p.quantity}</td>
      <td class="description">${p.desc || ""}</td>
      <td>
        <div class="action-buttons">
          <button class="btn-edit" onclick="editProduct(${p.id})">✏️ Sửa</button>
          <button class="btn-delete" onclick="deleteProduct(${p.id})">🗑️ Xóa</button>
        </div>
      </td>
    `;

    tableBody.appendChild(tr);
  }

  updateStats();
}

// ===== THÊM / SỬA =====
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = nameInput.value.trim();
  let category = categoryInput.value;
  let price = Number(priceInput.value);
  let quantity = Number(quantityInput.value);
  let desc = descInput.value.trim();

  if (name === "" || category === "") {
    alert("Nhập thiếu!");
    return;
  }

  if (price < 0 || quantity < 0) {
    alert("Không hợp lệ!");
    return;
  }

  if (editId) {
    // sửa
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === editId) {
        products[i].name = name;
        products[i].category = category;
        products[i].price = price;
        products[i].quantity = quantity;
        products[i].desc = desc;
      }
    }
    editId = null;
    cancelBtn.style.display = "none";
    formTitle.innerText = "Thêm Sản Phẩm Mới";
    submitBtn.innerText = "➕ Thêm Sản Phẩm";
  } else {
    // thêm
    let newProduct = {
      id: idCounter++,
      name: name,
      category: category,
      price: price,
      quantity: quantity,
      desc: desc
    };

    products.push(newProduct);
  }

  saveData();
  form.reset();
  render();
});

// ===== EDIT =====
function editProduct(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      let p = products[i];

      nameInput.value = p.name;
      categoryInput.value = p.category;
      priceInput.value = p.price;
      quantityInput.value = p.quantity;
      descInput.value = p.desc;

      editId = id;

      formTitle.innerText = "Chỉnh sửa sản phẩm";
      submitBtn.innerText = "💾 Cập nhật";
      cancelBtn.style.display = "block";
    }
  }
}

// ===== DELETE =====
function deleteProduct(id) {
  let check = confirm("Xóa sản phẩm?");
  if (!check) return;

  let newArr = [];

  for (let i = 0; i < products.length; i++) {
    if (products[i].id !== id) {
      newArr.push(products[i]);
    }
  }

  products = newArr;

  saveData();
  render();
}

// ===== XÓA TẤT =====
clearAllBtn.addEventListener("click", function () {
  let check = confirm("Xóa tất cả?");
  if (!check) return;

  products = [];
  idCounter = 1;

  saveData();
  render();
});

// ===== HỦY EDIT =====
cancelBtn.addEventListener("click", function () {
  editId = null;
  form.reset();
  cancelBtn.style.display = "none";
  formTitle.innerText = "Thêm Sản Phẩm Mới";
  submitBtn.innerText = "➕ Thêm Sản Phẩm";
});

// ===== SEARCH + FILTER =====
searchInput.addEventListener("input", filterData);
filterCategory.addEventListener("change", filterData);

function filterData() {
  let key = searchInput.value.toLowerCase();
  let cate = filterCategory.value;

  let result = [];

  for (let i = 0; i < products.length; i++) {
    let p = products[i];

    let checkName = p.name.toLowerCase().includes(key);
    let checkCate = cate === "" || p.category === cate;

    if (checkName && checkCate) {
      result.push(p);
    }
  }

  render(result);
}

// ===== THỐNG KÊ =====
function updateStats() {
  totalProducts.innerText = products.length;

  let total = 0;
  let qty = 0;

  for (let i = 0; i < products.length; i++) {
    total += products[i].price * products[i].quantity;
    qty += products[i].quantity;
  }

  totalValue.innerText = formatMoney(total);
  totalQuantity.innerText = qty;
}

// ===== FORMAT TIỀN =====
function formatMoney(num) {
  return num.toLocaleString("vi-VN") + " ₫";
}

// ===== INIT =====
render();