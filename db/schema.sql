DROP DATABASE IF EXISTS burger_db;
CREATE database burger_db;

USE burger_db;

CREATE TABLE burgers (
  id INT AUTO_INCREMENT,
  burger_name VARCHAR(75) NOT NULL,
  devoured BOOLEAN DEFAULT false, 
  PRIMARY KEY (id)
);