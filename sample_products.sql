/**
    Sample Products taken from Zaful Data Feed
**/

use dev;
DELETE FROM image;
DELETE FROM product;
/**DELETE FROM user;**/

INSERT INTO product
    VALUES (1, "Lace Panel Tied Tassel Sheer Top", "Zaful", 8.14, -1, "Zaful", -1, "https://t.cfjump.com/45556/p/26392715", "https://www.zaful.com/one-shoulder-lace-splicing-long-sleeve-t-shirt-p_81763.html", '2016-09-14', "Lace Panel Tied Tassel Sheer Top");
INSERT INTO image
    VALUES (1, "https://c.cfjump.com/Products/37843/26392715.jpg",1);

INSERT INTO product
    VALUES (2, "Irregular Hem Half Sleeve Hollow Out T-Shirt", "Zaful", 13.13, -1, "Zaful", -1, "https://t.cfjump.com/45556/p/26394086", "https://www.zaful.com/irregular-hem-half-sleeve-hollow-out-t-shirt-p_159137.html", '2016-09-14', "Irregular Hem Half Sleeve Hollow Out T-Shirt");
INSERT INTO image
    VALUES (2, "https://c.cfjump.com/Products/37843/26394086.jpg",2);  

INSERT INTO product
    VALUES (3, "Caged Bandage Bikini Swimwear", "Zaful", 14.99, -1, "Zaful", -1, "https://t.cfjump.com/45556/p/26396441", "https://www.zaful.com/elastic-spaghetti-straps-solid-color-bikini-set-p_179480.html", '2016-09-14', "Caged Bandage Bikini Swimwear");
INSERT INTO image
    VALUES (3, "https://c.cfjump.com/Products/37843/26396441.jpg",3);  

INSERT INTO product
    VALUES (4, "Women's Chic Brazil Hit Color Print Tank Top", "Zaful", 11.44, -1, "Zaful", -1, "https://t.cfjump.com/45556/p/26396519", "https://www.zaful.com/women-s-chic-brazil-hit-color-print-tank-top-p_196417.html", '2016-09-14', "Women's Chic Brazil Hit Color Print Tank Top");
INSERT INTO image
    VALUES (4, "https://c.cfjump.com/Products/37843/26396519.jpg",4);  

INSERT INTO product
    VALUES (5, "Crossover Choker Blouse", "Zaful", 8.80, -1, "Zaful", -1, "https://t.cfjump.com/45556/p/33922002", "https://www.zaful.com/crossover-choker-blouse-p_214968.html", '2017-01-14', "Crossover Choker Blouse");
INSERT INTO image
    VALUES (5, "https://c.cfjump.com/Products/37843/33922002.jpg",5); 

INSERT INTO product
    VALUES (6, "Cami Wrap Slip Dress", "Zaful", 13.86, -1, "Zaful", -1, "https://t.cfjump.com/45556/p/37940145", "https://www.zaful.com/cami-wrap-slip-dress-p_272281.html", '2017-04-11', "Cami Wrap Slip Dress");
INSERT INTO image
    VALUES (6, "https://c.cfjump.com/Products/37843/37940145.jpg",6); 

INSERT INTO product
    VALUES (7, "Low Cut High Waist Sheer Bikini Swimsuit", "Zaful", 10.62, -1, "Zaful", -1, "https://t.cfjump.com/45556/p/33931037", "https://www.zaful.com/low-cut-mesh-high-waist-bikini-set-p_256170.html", '2017-01-14', "Low Cut High Waist Sheer Bikini Swimsuit");
INSERT INTO image
    VALUES (7, "https://c.cfjump.com/Products/37843/33931037.jpg",7); 

INSERT INTO product
    VALUES (8, "Multiway Crop Top", "Zaful", 7.95, -1, "Zaful", -1, "https://t.cfjump.com/45556/p/34680049", "https://www.zaful.com/multiway-crop-top-p_207360.html", '2017-02-01', "Multiway Crop Top");
INSERT INTO image
    VALUES (8, "https://c.cfjump.com/Products/37843/34680049.jpg",8); 

INSERT INTO product
    VALUES (9, "Suede Pockets Shorts", "Zaful", 10.21, -1, "Zaful", -1, "https://t.cfjump.com/45556/p/36639201", "https://www.zaful.com/suede-pockets-shorts-p_251180.html", '2017-03-10', "Suede Pockets Shorts");
INSERT INTO image
    VALUES (9, "https://c.cfjump.com/Products/37843/36639201.jpg",9); 

INSERT INTO product
    VALUES (10, "Off Shoulder Pleuche Dress", "Zaful", 11.70, -1, "Zaful", -1, "https://t.cfjump.com/45556/p/37873658", "https://www.zaful.com/off-shoulder-pleuche-dress-p_252664.html", '2017-04-08', "Off Shoulder Pleuche Dress");
INSERT INTO image
    VALUES (10, "https://c.cfjump.com/Products/37843/37873658.jpg",10); 

INSERT INTO product
    VALUES (11, "Tied Checked Bikini Set", "Zaful", 18.49, -1, "Zaful", -1, "https://t.cfjump.com/45556/p/42744802", "https://www.zaful.com/tied-checked-bikini-set-p_303851.html", '2017-08-09', "Tied Checked Bikini Set");
INSERT INTO image
    VALUES (11, "https://c.cfjump.com/Products/37843/42744802.jpg",11); 


INSERT INTO category VALUES (1, "Dresses");
INSERT INTO category VALUES (2, "Shoes");
INSERT INTO category VALUES (3, "Accessories");
INSERT INTO category VALUES (4, "Tops");
INSERT INTO category VALUES (5, "Bottoms");
INSERT INTO category VALUES (6, "Swim");
INSERT INTO category VALUES (7, "Intimates");


insert into occasion 
    values (1, "sample occasion", "sample description", "sample form");