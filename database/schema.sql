DROP DATABASE IF EXISTS dataSpace;

CREATE DATABASE dataSpace;

USE dataSpace;

CREATE TABLE IF NOT EXISTS favorites(
  id int NOT NULL AUTO_INCREMENT,
  url VARCHAR(300),
  PRIMARY KEY(id)
)