CREATE DATABASE movies;

CREATE TABLE movies (
  id INT PRIMARY KEY AUTO_INCREMENT,
  grade varchar(256),
  year INT,
  title varchar(1024),
  cover varchar(4096)
);
