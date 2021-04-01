DROP DATABASE IF EXISTS dataSpace;

CREATE DATABASE dataSpace;

USE dataSpace;

CREATE TABLE IF NOT EXISTS favorites(
  id int NOT NULL AUTO_INCREMENT,
  url VARCHAR(50),
  title VARCHAR(100),
  description VARCHAR(300),
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS users(
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(50),
  email VARCHAR(100),
  PRIMARY KEY(id)
);