DROP DATABASE IF EXISTS burger_db;
CREATE database burger_db;

USE burger_db;

CREATE TABLE burger (
  id INT AUTO_INCREMENT,
  burger_name VARCHAR(75),
  devoured BOOLEAN, 
  PRIMARY KEY (id)
);