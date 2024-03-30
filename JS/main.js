// Define product class
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  // Define shopping cart class
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(product, quantity) {
      this.items.push({ product, quantity });
    }
  
    calculateTotal() {
      let total = 0;
      for (let item of this.items) {
        total += item.product.price * item.quantity;
      }
      return total;
    }
  }
  
  // Define order class
  class Order {
    constructor(cart, customerInfo) {
      this.cart = cart;
      this.customerInfo = customerInfo;
      this.orderDate = new Date();
      this.orderStatus = "Pending";
    }
  
    getOrderSummary() {
      let summary = `Order Summary:\n`;
      for (let item of this.cart.items) {
        summary += `${item.product.name} x ${item.quantity}: $${item.product.price * item.quantity}\n`;
      }
      summary += `Total: $${this.cart.calculateTotal()}\n`;
      return summary;
    }
  }
  
  // Create sample products
  const product1 = new Product(1, "Laptop", 999);
  const product2 = new Product(2, "Phone", 699);
  const product3 = new Product(3, "Headphones", 99);
  
  // Create shopping cart
  const cart = new ShoppingCart();
  
  // Add items to the cart
  cart.addItem(product1, 1);
  cart.addItem(product2, 2);
  cart.addItem(product3, 1);
  
  // Create order
  const customerInfo = { name: "John Doe", email: "john@example.com" };
  const order = new Order(cart, customerInfo);
  
  // Output order summary
  console.log(order.getOrderSummary());
  