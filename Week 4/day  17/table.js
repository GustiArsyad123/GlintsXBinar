CREATE DATABASES sales;

USE sales;

CREATE TABLE suppliers( id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
name VARCHAR(225) NOT NULL);

CREATE TABLE goods(id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
name VARCHAR(225) NOT NULL, price DECIMAL NOT NULL, 
id_supplier BIGINT UNSIGNED NOT NULL, FOREIGN KEY (id_supplier) REFERENCES 
suppliers(id));

CREATE TABLE customers(id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
name VARCHAR(255) NOT NULL);

CREATE TABLE transactions(id BIGINT UNSIGNED auto_increment NOT NULL PRIMARY KEY,
id_good BIGINT UNSIGNED NOT NULL, id_customer BIGINT UNSIGNED NOT NULL, 
FOREIGN KEY (id_good) REFERENCES goods(id), FOREIGN KEY (id_customer) 
REFERENCES customers(id), time DATETIME DEFAULT now() NOT NULL, 
quantity INT NOT NULL, total DECIMAL NOT NULL);

SELECT * FROM sales.transactions  WHERE id=1;

//query raw
SELECT *
FROM sales.transactions  
JOIN sales.customers 
ON id_customer = sales.customers.id;

-- INSERT 
INSERT INTO suppliers(name) 
VALUES ("Umam"), ("syafa"), ("falah"), ("dhea"), ("anggun"), ("agif");

INSERT INTO suppliers(name) VALUES ("Reza");

INSERT INTO goods(name, price, id_supplier) 
VALUES ("Pepsodent", 14500, 1), ("Lifeboy", 24600, 2), ("Clear", 44500, 3);

INSERT INTO transactions(id_good, id_customer, quantity, total) 
VALUES (1,1,1,14500), (2,2,2,49200), (3,3,3,133500);

-- >SELECT 
SELECT * FROM  sales.customers; 

SELECT * FROM  sales.suppliers ; 

SELECT * FROM  sales.goods; 

SELECT * FROM  sales.transactions ; 

-- SELECT WHERE 
SELECT * FROM sales.customers WHERE id = 1;

SELECT * FROM sales.transactions WHERE id = 1;

-- SELECT ORDER BY
SELECT * FROM sales.customers ORDER BY name;

SELECT * FROM sales.customers ORDER BY name DESC;

-- DELETE 
DELETE FROM sales.transactions WHERE id=3;

DELETE FROM sales.customers WHERE id=3;

-- DROP table
DROP TABLE nama_table;

-- UPDATE isi table
UPDATE sales.customers SET name="Dhea" WHERE id=4;

UPDATE sales.transactions SET id_good=2,id_customer=1, quantity=30, total=246900 WHERE id=1;

-- SELECT LIMIT
SELECT * FROM sales.suppliers ORDER BY name LIMIT 3;

-- SELECT WITH JOIN -- t, c untuk menyingkat coding = t transaction, c = customers 
SELECT * FROM sales.transactions t
JOIN sales.customers c ON t.id_customer =c.id
JOIN sales.goods g ON g.id = t.id_good;

SELECT t.id, g.name, g.price, c.name, t.time, t.quantity, t.total FROM sales.transactions t
JOIN sales.customers c ON t.id_customer =c.id
JOIN sales.goods g ON g.id = t.id_good;

