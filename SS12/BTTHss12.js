let products = [

{ id: "P01", name: "Laptop MacBook Pro M3", price: 2000, category: "Laptop", inStock: true },

{ id: "P02", name: "Logitech Wireless Mouse", price: 45, category: "Phụ kiện", inStock: true },

{ id: "P03", name: "Keychron Mechanical Keyboard", price: 95, category: "Phụ kiện", inStock: false },

{ id: "P04", name: "Dell UltraSharp Monitor", price: 450, category: "Màn hình", inStock: true },

{ id: "P05", name: "Sony WH-1000XM5 Headphones", price: 350, category: "Phụ kiện", inStock: true }

];

const condition = products.filter((value) => value.inStock === true);
console.log(condition);




const accessoryProduct = products.filter((value) => value.category === "Phụ kiện");
console.log(accessoryProduct);




const total = condition.reduce((acc, value) => acc + value.price, 0);
console.log(total);