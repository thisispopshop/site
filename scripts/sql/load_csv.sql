    
/*
    lOAD_CSV.SQL
    This file takes in a properly formatted csv file 
    and puts the data into the correct tables.
*/
use dev;
DROP PROCEDURE IF EXISTS importCSV;

delimiter |

CREATE PROCEDURE importCSV()
BEGIN

DECLARE firstRow INT DEFAULT 0;
DECLARE lastRow INT DEFAULT 0;
SELECT COUNT(*) FROM csvTable INTO lastRow;
SET firstRow = 0;

/*loop through rows of csv table*/
WHILE firstRow < lastRow DO 

    /*fill into product table*/
    INSERT INTO product (name,merchant,price,url,description) 
    SELECT (name,merchant,price,url,description) FROM csvTable
    LIMIT firstRow, 1;

    /*get that product's primary key*/
    SET @key = (SELECT SCOPE_IDENTITY())
    SELECT SCOPE_IDENTITY()

    /*add image*/
    INSERT INTO images (url,product)
    SELECT (image) FROM csvTable
    LIMIT firstRow, 1;

    /*add category
    INSERT INTO category (name, product) 
    SELECT IF(category IS NULL or category = "","empty",category) as category FROM csvTable
    */

    /*add color
    INSERT INTO color (name, product)
    SELECT IF(color IS NULL or category = "","empty",color) as color FROM csvTable
    */

    SET firstRow = firstRow + 1;
    END WHILE;
END |
delimiter ;

/*create the temp table*/
DROP TABLE IF EXISTS csvTable;
CREATE TABLE csvTable(Id int, name varchar(100), merchant varchar(100) ,price decimal(5,2), url text, description text);

/*load csv file into temp table*/
LOAD DATA LOCAL INFILE 'newProducts.csv' INTO TABLE csvTable
FIELDS TERMINATED BY ","
LINES TERMINATED BY "/n"
IGNORE 1 ROWS;

/*apply procedure to split products*/
CALL importCSV();