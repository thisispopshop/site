/**
    Sample Products taken from Zaful Data Feed
**/

use dev;
DELETE FROM image;
DELETE FROM product;
/**DELETE FROM user;**/

INSERT INTO product
    (name,merchant,price,url,description)
    VALUES ("Lace Panel Tied Tassel Sheer Top", "Zaful", 8.14, "https://t.cfjump.com/45556/p/26392715", "Lace Panel Tied Tassel Sheer Top");
INSERT INTO image
    (url,product)
    VALUES ("https://c.cfjump.com/Products/37843/26392715.jpg",LAST_INSERT_ID());

INSERT INTO product
    (name,merchant,price,url,description)
    VALUES ("Irregular Hem Half Sleeve Hollow Out T-Shirt", "Zaful", 13.13,"https://t.cfjump.com/45556/p/26394086",  "Irregular Hem Half Sleeve Hollow Out T-Shirt");
INSERT INTO image
   (url,product)
    VALUES ("https://c.cfjump.com/Products/37843/26394086.jpg",LAST_INSERT_ID());  

INSERT INTO product
    (name,merchant,price,url,description)
    VALUES ("Caged Bandage Bikini Swimwear", "Zaful", 14.99, "https://t.cfjump.com/45556/p/26396441","Caged Bandage Bikini Swimwear");
INSERT INTO image
    (url,product)
    VALUES ("https://c.cfjump.com/Products/37843/26396441.jpg",LAST_INSERT_ID());  

INSERT INTO product
    (name,merchant,price,url,description)
    VALUES ("Women's Chic Brazil Hit Color Print Tank Top", "Zaful", 11.44,"https://t.cfjump.com/45556/p/26396519", "Women's Chic Brazil Hit Color Print Tank Top");
INSERT INTO image
   (url,product)
    VALUES ("https://c.cfjump.com/Products/37843/26396519.jpg",LAST_INSERT_ID());  

INSERT INTO product
    (name,merchant,price,url,description)
    VALUES ("Crossover Choker Blouse", "Zaful", 8.80,"https://t.cfjump.com/45556/p/33922002", "Crossover Choker Blouse");
INSERT INTO image
   (url,product)
    VALUES ("https://c.cfjump.com/Products/37843/33922002.jpg",LAST_INSERT_ID()); 

INSERT INTO product
    (name,merchant,price,url,description)
    VALUES ("Cami Wrap Slip Dress", "Zaful", 13.86, "https://t.cfjump.com/45556/p/37940145", "Cami Wrap Slip Dress");
INSERT INTO image
    (url,product)
    VALUES ("https://c.cfjump.com/Products/37843/37940145.jpg",LAST_INSERT_ID()); 

INSERT INTO product
    (name,merchant,price,url,description)
    VALUES ("Low Cut High Waist Sheer Bikini Swimsuit", "Zaful", 10.62, "https://t.cfjump.com/45556/p/33931037",  "Low Cut High Waist Sheer Bikini Swimsuit");
INSERT INTO image
    (url,product)
    VALUES ("https://c.cfjump.com/Products/37843/33931037.jpg",LAST_INSERT_ID()); 

INSERT INTO product
    (name,merchant,price,url,description)
    VALUES ("Multiway Crop Top", "Zaful", 7.95, "https://t.cfjump.com/45556/p/34680049",  "Multiway Crop Top");
INSERT INTO image
    (url,product)
    VALUES ("https://c.cfjump.com/Products/37843/34680049.jpg",LAST_INSERT_ID()); 

INSERT INTO product
    (name,merchant,price,url,description)
    VALUES ("Suede Pockets Shorts", "Zaful", 10.21, "https://t.cfjump.com/45556/p/36639201", "Suede Pockets Shorts");
INSERT INTO image
    (url,product)
    VALUES ("https://c.cfjump.com/Products/37843/36639201.jpg",LAST_INSERT_ID()); 

INSERT INTO product
    (name,merchant,price,url,description)
    VALUES ("Off Shoulder Pleuche Dress", "Zaful", 11.70, "https://t.cfjump.com/45556/p/37873658", "Off Shoulder Pleuche Dress");
INSERT INTO 
    (url,product)
    VALUES ("https://c.cfjump.com/Products/37843/37873658.jpg",LAST_INSERT_ID()); 

INSERT INTO product
    (name,merchant,price,url,description)
    VALUES ("Tied Checked Bikini Set", "Zaful", 18.49, "https://t.cfjump.com/45556/p/42744802", "Tied Checked Bikini Set");
INSERT INTO image
    (url,product)
    VALUES ("https://c.cfjump.com/Products/37843/42744802.jpg",LAST_INSERT_ID()); 


INSERT INTO category (name) VALUES ("Dresses");
INSERT INTO category (name) VALUES ("Shoes");
INSERT INTO category (name) VALUES ("Accessories");
INSERT INTO category (name) VALUES ("Tops");
INSERT INTO category (name) VALUES ("Bottoms");
INSERT INTO category (name) VALUES ("Swim");
INSERT INTO category (name) VALUES ("Intimates");