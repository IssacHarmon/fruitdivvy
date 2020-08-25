CREATE SCHEMA FRUITDIVVY;
USE FRUITDIVVY;
CREATE TABLE providers(
id int not null auto_increment,
name  VARCHAR(60) NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE,
password VARCHAR(100) NOT NULL,
address VARCHAR(60) NOT NULL,
lat FLOAT NOT NULL,
lng FLOAT NOT NULL,
created_at TIMESTAMP DEFAULT NOW(),
PRIMARY KEY (id)
);
create table users_fruits (
userid int not null auto_increment,
fruit varchar(25) not null,
primary key(userid, fruit),
foreign key(userid) references providers(id)
);
DELETE from users_fruits where userid = 8;
DELETE from providers where id = 8;

INSERT INTO users_fruits (userid, fruit) VALUES
(1, 'apples'),
(1, 'oranges'),
(1, 'dragon fruit'),
(1, 'tomato'),
(2, 'oranges'),
(2, 'bananas'),
(2, 'blueberries'),
(2, 'durian'),
(2, 'tomato');

CREATE USER 'test'@'localhost' IDENTIFIED BY 'test123';

GRANT ALL PRIVILEGES ON fruitdivvy . * TO 'test'@'localhost';