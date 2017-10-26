-- DROP DATABASE IF EXISTS bamazon;
-- CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE IF NOT EXISTS products(
	item_id INT NOT NULL auto_increment,
    product_name VARCHAR (100) NOT NULL,
    department_name VARCHAR (100) NOT NULL,
    price DECIMAL (5, 2) NOT NULL,
    stock_quantity INT (200) NOT NULL,
    PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES
('Jordan 1 Fragment', 'Shoes', 500.00, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES
('Jordan 1 Shattered Backboard', 'Shoes', 400.00, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES
('Jordan 1 Bred', 'Shoes', 900.00, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES
('Jordan 11 Flu Game', 'Shoes', 250.00, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES
('Jordan 11 Space Jam', 'Shoes', 175.00, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES
('Jordan 3 White Cement', 'Shoes', 600.00, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES
('Jordan 4 Motorsport', 'Shoes', 110.00, 75);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES
('Jordan 13 Cherry', 'Shoes', 210.00, 60);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES
('Jordan 7 Infra Red', 'Shoes', 350.00, 95);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES
('Jordan 8 Wolf Grey', 'Shoes', 165.00, 80);

SELECT * FROM products 