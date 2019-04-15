    use dev;
    
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