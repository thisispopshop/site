/**
    Sample Products taken from Zaful Data Feed
**/

use dev;
DELETE FROM image;
DELETE FROM product;
/**DELETE FROM user;**/

INSERT INTO product
    VALUES (1, "Lace Panel Tied Tassel Sheer Top", "Zaful", 8.14, "https://t.cfjump.com/45556/p/26392715", "Lace Panel Tied Tassel Sheer Top");
INSERT INTO image
    VALUES (1, "https://c.cfjump.com/Products/37843/26392715.jpg",1);

INSERT INTO product
    VALUES (2, "Irregular Hem Half Sleeve Hollow Out T-Shirt", "Zaful", 13.13,"https://t.cfjump.com/45556/p/26394086",  "Irregular Hem Half Sleeve Hollow Out T-Shirt");
INSERT INTO image
    VALUES (2, "https://c.cfjump.com/Products/37843/26394086.jpg",2);  

INSERT INTO product
    VALUES (3, "Caged Bandage Bikini Swimwear", "Zaful", 14.99, "https://t.cfjump.com/45556/p/26396441","Caged Bandage Bikini Swimwear");
INSERT INTO image
    VALUES (3, "https://c.cfjump.com/Products/37843/26396441.jpg",3);  

INSERT INTO product
    VALUES (4, "Women's Chic Brazil Hit Color Print Tank Top", "Zaful", 11.44,"https://t.cfjump.com/45556/p/26396519", "Women's Chic Brazil Hit Color Print Tank Top");
INSERT INTO image
    VALUES (4, "https://c.cfjump.com/Products/37843/26396519.jpg",4);  

INSERT INTO product
    VALUES (5, "Crossover Choker Blouse", "Zaful", 8.80,"https://t.cfjump.com/45556/p/33922002", "Crossover Choker Blouse");
INSERT INTO image
    VALUES (5, "https://c.cfjump.com/Products/37843/33922002.jpg",5); 

INSERT INTO product
    VALUES (6, "Cami Wrap Slip Dress", "Zaful", 13.86, "https://t.cfjump.com/45556/p/37940145", "Cami Wrap Slip Dress");
INSERT INTO image
    VALUES (6, "https://c.cfjump.com/Products/37843/37940145.jpg",6); 

INSERT INTO product
    VALUES (7, "Low Cut High Waist Sheer Bikini Swimsuit", "Zaful", 10.62, "https://t.cfjump.com/45556/p/33931037",  "Low Cut High Waist Sheer Bikini Swimsuit");
INSERT INTO image
    VALUES (7, "https://c.cfjump.com/Products/37843/33931037.jpg",7); 

INSERT INTO product
    VALUES (8, "Multiway Crop Top", "Zaful", 7.95, "https://t.cfjump.com/45556/p/34680049",  "Multiway Crop Top");
INSERT INTO image
    VALUES (8, "https://c.cfjump.com/Products/37843/34680049.jpg",8); 

INSERT INTO product
    VALUES (9, "Suede Pockets Shorts", "Zaful", 10.21, "https://t.cfjump.com/45556/p/36639201", "Suede Pockets Shorts");
INSERT INTO image
    VALUES (9, "https://c.cfjump.com/Products/37843/36639201.jpg",9); 

INSERT INTO product
    VALUES (10, "Off Shoulder Pleuche Dress", "Zaful", 11.70, "https://t.cfjump.com/45556/p/37873658", "Off Shoulder Pleuche Dress");
INSERT INTO image
    VALUES (10, "https://c.cfjump.com/Products/37843/37873658.jpg",10); 

INSERT INTO product
    VALUES (11, "Tied Checked Bikini Set", "Zaful", 18.49, "https://t.cfjump.com/45556/p/42744802", "Tied Checked Bikini Set");
INSERT INTO image
    VALUES (11, "https://c.cfjump.com/Products/37843/42744802.jpg",11); 


INSERT INTO category VALUES (1, "Dresses");
INSERT INTO category VALUES (2, "Shoes");
INSERT INTO category VALUES (3, "Accessories");
INSERT INTO category VALUES (4, "Tops");
INSERT INTO category VALUES (5, "Bottoms");
INSERT INTO category VALUES (6, "Swim");
INSERT INTO category VALUES (7, "Intimates");