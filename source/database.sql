-- Database
CREATE DATABASE contacts;
USE contacts;

-- Tables
CREATE TABLE users (
    username VARCHAR(30) PRIMARY KEY,
    password VARCHAR(30) NOT NULL,
    fullname VARCHAR(50) NOT NULL,
    career VARCHAR(50) NOT NULL,
    number VARCHAR(20) NOT NULL
);

CREATE TABLE contacts (
    id INT(12) PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    number VARCHAR(20) NOT NULL,
    career VARCHAR(50) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user FOREIGN KEY(username) REFERENCES users(username)
);

-- User Testing
INSERT INTO users(username, password, fullname, career, number) VALUES (
    'mando', 'passwd', 'Armando Vargas', 'Ingenieria en Computacion', '55 1111 2222'
);
