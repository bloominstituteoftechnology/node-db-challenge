# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.
 RDBMS = relational database managament system .....SQL = Structured query language.
RDBMS refers to a db management system or software. There are many different management systems, they may use a different methodology for arranging the data within them. In this instance, the RDBMS is utilizing a relational model to strucuture the db. SQL is a language through which we can issue commands to implement CRUD operations in the RDBMS.
1.  Why do tables need a `primary key`?
Tables need a primary key because it serves as a point of reference for other foreign keys in a relational system. A primary key has attributes such as it must be unique and the field cannot be empty (a primary key must exist). We can either specify a primary key or the datatbase will automatically issue them.
1.  What is the name given to a table column that references the primary key
    on another table.
Foreign key
1.  What do we need in order to have a _many to many_ relationship between two
    tables.
We need to joining tables and utlize primary and foreign keys.
1.  What SQL statement is used to retrieve data from a table?
SELECT ( can use * for all or specify column) FROM (table)
1.  What SQL clause is used to filter the results of a query?
WHERE / AND

So SELECT * FROM students WHERE studenthometown = 'Quebec';
