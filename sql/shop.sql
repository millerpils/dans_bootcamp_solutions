CREATE TABLE Products (
  product_id INTEGER PRIMARY KEY,
  name TEXT
);
 
  
CREATE TABLE Customers (
  customer_id INTEGER PRIMARY KEY,
  name TEXT
);
  
 
CREATE TABLE Orders (
  order_id INTEGER PRIMARY KEY,
  order_num INTEGER,
  order_time TEXT,
  order_date TEXT,
  customer_id INTEGER,
  FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

INSERT INTO Products (product_id, name) VALUES
(1, "Socks"),
(2, "Hats");

INSERT INTO Customers (customer_id, name) VALUES
(1, "Daniel");

INSERT INTO Orders (order_id, order_num, order_time, order_date, customer_id) VALUES
(1, 101, "12pm", "17/01/2021", 1);



-- SELECT * FROM Orders;
-- SELECT * FROM Products;
-- SELECT * FROM Customers;

-- What happens when an order has more than one product?

---------------------------------------------------------------------------

CREATE TABLE Products (
  product_id INTEGER PRIMARY KEY,
  name TEXT
);
  
CREATE TABLE Customers (
  customer_id INTEGER PRIMARY KEY,
  name TEXT
);
  
CREATE TABLE Orders (
  order_id INTEGER PRIMARY KEY,
  order_num INTEGER,
  order_time TEXT,
  order_date TEXT,
  customer_id INTEGER,
  FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

CREATE TABLE OrderItems (
  order_id INTEGER,
  product_id INTEGER,
  FOREIGN KEY(order_id) REFERENCES Orders(order_id),
  FOREIGN KEY(product_id) REFERENCES Products(product_id)
 );
  
INSERT INTO Products (product_id, name) VALUES
(1, "Socks"),
(2, "Hats");

INSERT INTO Customers (customer_id, name) VALUES
(1, "Daniel");

INSERT INTO Orders (order_id, order_num, order_time, order_date, customer_id) VALUES
(1, 101, "12pm", "17/01/2021", 1);

INSERT INTO OrderItems (order_id, product_id) VALUES
(1, 1),
(1, 2);

SELECT Customers.name AS "Customer Name", Orders.order_num AS "Order Number", Products.name AS "Product Name"
FROM Customers, Orders, Products
JOIN OrderItems ON
OrderItems.order_id = Orders.order_id AND
OrderItems.product_id = Products.product_id AND
Customers.customer_id = Orders.customer_id;