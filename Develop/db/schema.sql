-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- CREATE TABLES
USE ecommerce_db;
CREATE TABLE category (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45) NULL
);

CREATE TABLE product (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(45) NULL,
    price DECIMAL(10,2) NULL,
    stock INT NULL,  -- MUST BE SET DEFAULT 10 and Numeric Validation
    category_id INT NULL,
    FOREIGN KEY (category_id) REFERENCES category (id)
);

CREATE TABLE tag (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tag_name VARCHAR(45) NULL
);

CREATE TABLE product_tag (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_id INT NULL,
    tag_id INT NULL,
    FOREIGN KEY (product_id) REFERENCES product (id),
    FOREIGN KEY (tag_id) REFERENCES tag (id)
);
