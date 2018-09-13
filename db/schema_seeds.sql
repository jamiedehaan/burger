DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(50),
    devoured BOOLEAN DEFAULT false
);

INSERT INTO burgers (burger_name)
VALUES 
    ("Bacon Cheeseburger"), ("Guacamole Burger"), ("Mushroom Burger");

SELECT * FROM burgers