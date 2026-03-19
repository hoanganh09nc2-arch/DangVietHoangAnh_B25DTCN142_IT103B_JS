// ================== DATA ==================
const products = [
  {
    id: 1,
    name: "Tai nghe Bluetooth TWS",
    price: 320000,
    image: "https://picsum.photos/seed/mp19-tws/1200/800",
    description: "Chống ồn nhẹ, pin 20h, kết nối ổn định.",
  },
  {
    id: 2,
    name: "Bàn phím cơ 87 phím",
    price: 790000,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1200&q=60",
    description: "Switch blue, led trắng, gõ sướng tay.",
  },
  {
    id: 3,
    name: "Chuột không dây",
    price: 450000,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1200&q=60",
    description: "Thiết kế ergonomic.",
  },
  {
    id: 4,
    name: "USB 64GB",
    price: 120000,
    image: "https://picsum.photos/seed/mp19-usb/1200/800",
    description: "Nhỏ gọn.",
  }
];

// giỏ hàng
let cart = {};

// key localStorage
const KEY = "cart_sv";

// ================== DOM ==================
const productsGrid = document.getElementById("products-grid");
const cartBody = document.getElementById("cart-tbody");
const cartEmpty = document.getElementById("cart-empty");

const statLines = document.getElementById("stat-lines");
const statQty = document.getElementById("stat-qty");
const statTotal = document.getElementById("stat-total");

const clearBtn = document.getElementById("clear-cart-btn");

// ================== HÀM PHỤ ==================
function formatMoney(num) {
  return num.toLocaleString("vi-VN") + " VNĐ";
}

function findProduct(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      return products[i];
    }
  }
  return null;
}

// ================== RENDER PRODUCT ==================
function renderProducts() {
  let html = "";

  for (let i = 0; i < products.length; i++) {
    const p = products[i];

    html += `
      <div class="card">
        <div class="card-img">
          <img src="${p.image}">
        </div>
        <div class="card-body">
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <div class="card-footer">
            <span>${formatMoney(p.price)}</span>
            <button onclick="addToCart(${p.id})">Thêm</button>
          </div>
        </div>
      </div>
    `;
  }

  productsGrid.innerHTML = html;
}

// ================== CART ==================
function addToCart(id) {
  if (!cart[id]) {
    cart[id] = {
      productId: id,
      quantity: 1
    };
  } else {
    cart[id].quantity++;
  }

  saveCart();
  renderCart();
}

function increase(id) {
  cart[id].quantity++;
  saveCart();
  renderCart();
}

function decrease(id) {
  cart[id].quantity--;

  if (cart[id].quantity <= 0) {
    delete cart[id];
  }

  saveCart();
  renderCart();
}

function removeItem(id) {
  const confirmDel = confirm("Bạn có chắc muốn xóa không?");
  if (confirmDel) {
    delete cart[id];
    saveCart();
    renderCart();
  }
}

function clearCart() {
  const ok = confirm("Xóa hết giỏ hàng?");
  if (ok) {
    cart = {};
    saveCart();
    renderCart();
  }
}

// ================== RENDER CART ==================
function renderCart() {
  let html = "";
  let total = 0;
  let qty = 0;
  let lines = 0;

  for (let key in cart) {
    const item = cart[key];
    const p = findProduct(item.productId);

    if (!p) continue;

    const lineTotal = p.price * item.quantity;

    total += lineTotal;
    qty += item.quantity;
    lines++;

    html += `
      <tr>
        <td>${p.name}</td>
        <td>${formatMoney(p.price)}</td>
        <td>
          <button onclick="decrease(${p.id})">-</button>
          ${item.quantity}
          <button onclick="increase(${p.id})">+</button>
        </td>
        <td>${formatMoney(lineTotal)}</td>
        <td>
          <button onclick="removeItem(${p.id})">Xóa</button>
        </td>
      </tr>
    `;
  }

  cartBody.innerHTML = html;

  if (lines === 0) {
    cartEmpty.style.display = "block";
  } else {
    cartEmpty.style.display = "none";
  }

  statLines.innerText = lines;
  statQty.innerText = qty;
  statTotal.innerText = formatMoney(total);
}

// ================== LOCAL STORAGE ==================
function saveCart() {
  localStorage.setItem(KEY, JSON.stringify(cart));
}

function loadCart() {
  const data = localStorage.getItem(KEY);
  if (data) {
    cart = JSON.parse(data);
  }
}

// ================== EVENT ==================
clearBtn.onclick = function () {
  clearCart();
};

loadCart();
renderProducts();
renderCart();