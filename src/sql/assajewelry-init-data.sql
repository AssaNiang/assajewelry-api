DELETE FROM user;
DELETE FROM order;
DELETE FROM `address`;
DELETE FROM `size`;
DELETE FROM category;
DELETE FROM product;
DELETE FROM `image`;
DELETE FROM comment;
DELETE FROM product_size;

INSERT INTO `user` (firstname, lastname, password, email, role) VALUES ('jean', 'b', SHA2(CONCAT('jean', 'salt_value_here'), 256), 'jean@gmail.com', 'user'),('papa', 'jtm', SHA2(CONCAT('papa', 'salt_value_here'), 256), 'papa@example.com', 'user'),('ma', 'magassa', SHA2(CONCAT('ma', 'salt_value_here'), 256), 'ma@gmail.com', 'admin');
INSERT INTO `order` (statut,id_user) VALUES ('en cours', 3),('en cours', 2);

INSERT INTO `address` (street,city,country,zip,id_user) VALUES ('1 rue du paradis','janah','france',123, 3);
INSERT INTO size (name) VALUES ('42'), ('47'), ('49'), ('52');
INSERT INTO `category` (name,description,image) VALUES ('Bagues','Jetez un oeil à notre séléction de Bagues','https://mayuri.fr/cdn/shop/products/bague-kali-diamantnoir-or_1400_700x.jpg?v=1634130751'),
 ('Colliers','Jetez un oeil à notre séléction de Colliers','https://mayuri.fr/cdn/shop/products/collier-devi-emeraude-or-vermeil_700x.jpg?v=1634130058'),('Bracelets','Jetez un oeil à notre séléction de Bracelets','https://mayuri.fr/cdn/shop/files/bracelet-baguette-rubis-shanti-z_700x.jpg?v=1684921553');
INSERT INTO `product` (name,price,description,id_category,id_order) VALUES ('bague bleue',270,'Cette bague majestueuse fait honneur à Assa',1,1),('bague rouge',270,'Cette bague rouge majestueuse fait honneur à mbaye',1,2),
('Collier Vert',270,'Ce collier majestueuse fait honneur à Assa',2,1),('Collier rouge',270,'Ce collier rouge majestueuse fait honneur à mbaye16',2,2)
,('Bracelet Vert',270,'Ce bracelet majestueuse fait honneur à Assa',3,1),('Bracelet rouge',270,'Ce Bracelet rouge majestueuse fait honneur à mbaye16',3,2);
INSERT INTO `comment` (productId,userId) VALUES (1, 2);
INSERT INTO `product_size` (productId,sizeId) VALUES (1, 2),(1, 1),(1, 4);
INSERT INTO `image` (image_url,id_product) VALUES ('https://mayuri.fr/cdn/shop/products/bague-saphir-or_9752603f-8eff-40c6-bb7e-053addf0729a_600x.jpg?v=1674152909', 1),('https://mayuri.fr/cdn/shop/products/IMG_0080-1_600x.jpg?v=1634128213', 1),('https://mayuri.fr/cdn/shop/products/bague-tina-saphir-nm_600x.jpg?v=1650203430',1),('https://mayuri.fr/cdn/shop/products/IMG_0080-1_600x.jpg?v=1634128213', 1),('https://mayuri.fr/cdn/shop/files/collier-geometrique-emeraude-atma_700x.jpg?v=1684927736',3),('https://mayuri.fr/cdn/shop/files/collier-geometrique-emeraude-atma-or-vermeil_600x.jpg?v=1684927736',3),('https://mayuri.fr/cdn/shop/files/collier-emeraude-geometrique-atma_600x.jpg?v=1686556722',3),('https://mayuri.fr/cdn/shop/files/collier-geometrique-original-rubis-atma_700x.jpg?v=1684913564', 4),('https://mayuri.fr/cdn/shop/files/collier-geometrique-original-rubis-atma-s_600x.jpg?v=1684913564',4),('https://mayuri.fr/cdn/shop/files/collier-rubis-geometrique-atma_600x.jpg?v=1686557304',4),
('https://mayuri.fr/cdn/shop/files/bracelet-saphir-baguette-shanti_700x.jpg?v=1686559824',5),('https://mayuri.fr/cdn/shop/files/bracelet-baguette-saphir-shanti-z_700x.jpg?v=1684926036',5),('https://mayuri.fr/cdn/shop/files/bracelet-rubis-baguette-shanti_600x.jpg?v=1686559931',6),('https://mayuri.fr/cdn/shop/files/bracelet-baguette-rubis-shanti-z_700x.jpg?v=1684921553',6);
