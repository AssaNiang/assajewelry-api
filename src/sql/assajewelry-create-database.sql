 -- requêtes création des tables

DROP TABLE IF EXISTS category CASCADE; 
DROP TABLE IF EXISTS comment CASCADE; 
DROP TABLE IF EXISTS `image` CASCADE; 
DROP TABLE IF EXISTS `product` CASCADE; 
DROP TABLE IF EXISTS `product_size` CASCADE; 
DROP TABLE IF EXISTS `size` CASCADE; 
DROP TABLE IF EXISTS `user` CASCADE; 

CREATE TABLE category (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  link_category VARCHAR(255) NOT NULL
);

CREATE TABLE product(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
price DECIMAL(10, 2) NOT NULL,
description TEXT NOT NULL,
id_category INT,
FOREIGN KEY (id_category) REFERENCES category (id)
);

CREATE TABLE size(
 id INT PRIMARY KEY AUTO_INCREMENT,
 name VARCHAR(255) NOT NULL
);

CREATE TABLE image (
id INT PRIMARY KEY AUTO_INCREMENT,
image_url VARCHAR(255) NOT NULL,
id_product INT,
FOREIGN KEY (id_product) REFERENCES product (id)
);

CREATE TABLE user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') NOT NULL DEFAULT 'USER'
);

CREATE TABLE comment (
id INT PRIMARY KEY AUTO_INCREMENT,
comment_text VARCHAR(255) NOT NULL,
created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
id_product INT,
id_user INT,
FOREIGN KEY (id_product) REFERENCES product (id),
FOREIGN KEY (id_user) REFERENCES user (id)
);

CREATE TABLE product_size (
    PRIMARY KEY (product_id, size_id),
    product_id INT NOT NULL,
    size_id INT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES product (id),
    FOREIGN KEY (size_id) REFERENCES size (id)
);

INSERT INTO `product` (name,price,description,id_category) 
VALUES ('Sara Saphir',470,'Chic et colorée, cette bague fine apporte une touche exotique sur tout type de tenue',1),
('Jeanne Saphir',370,"Bague pavée de six diamants blancs et sertie d'un saphir bleu central de taille princesse",1),
('Maï Emeraude ',370,"Bague pavée de six émeraudes et sertie d'une émeraude centrale de taille princesse",1),
('Rama Rubis ',270,"Chic et colorée, cette bague fine apporte une touche exotique sur tout type de tenue",1),
('Mariane Diament Noir ',470,"Chic et colorée, cette bague fine apporte une touche exotique sur tout type de tenue",1),
('Khady Diament  ',390,"Chic et colorée, cette bague fine apporte une touche exotique sur tout type de tenue",1);

INSERT INTO `image` (image_url,id_product) VALUES ('http://localhost:4200/assets/img/categories/braceletrubis2.PNG', 20);


INSERT INTO `image` (image_url,id_product) VALUES ('http://localhost:4200/assets/img/categories/bagues/sara_saphir2.png', 8),('http://localhost:4200/assets/img/categories/bagues/sara_saphir3.png', 8),('http://localhost:4200/assets/img/categories/bagues/jeanne_saphir1.png', 9),('http://localhost:4200/assets/img/categories/bagues/jeanne_saphir2.png', 9),('http://localhost:4200/assets/img/categories/bagues/mai_emeraude1.png', 10),('http://localhost:4200/assets/img/categories/bagues/mai_emeraude2.png', 10),('http://localhost:4200/assets/img/categories/bagues/mai_emeraude3.png', 10),('http://localhost:4200/assets/img/categories/bagues/rama_rubis.png', 11),('http://localhost:4200/assets/img/categories/bagues/rama_rubis2.png', 11),('http://localhost:4200/assets/img/categories/bagues/rama_rubis3.png', 11),('http://localhost:4200/assets/img/categories/bagues/mariane_diamentnoir1.png', 12),('http://localhost:4200/assets/img/categories/bagues/mariane_diamentnoir2.png', 12),('http://localhost:4200/assets/img/categories/bagues/khady_diament1.png', 13),('http://localhost:4200/assets/img/categories/bagues/khady_diament2.png', 13),('http://localhost:4200/assets/img/categories/bagues/khady_diament3.png', 13);

INSERT INTO `comment` (comment_text,created_at,id_product,id_user) VALUES ("une bague qui tient bien sur le doigt et je l'ai acheté directement en boutique chez la créatrise qui compte bientôt mettre les produits en vente en ligne",now(),2, 2);
INSERT INTO `product_size` (productId,sizeId) VALUES (8, 2),(8, 1),(8, 4);