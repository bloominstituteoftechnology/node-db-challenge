# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.
    RDBMS stand for relational database management system, it is a style of database which uses tables, related to one another through the use of keys. This design can range from very basic for smaller databases, to extremely complex for larger databases where the relationship between tables can become very complicated. SQL, on the other hand, stands for structured query language, and is the language that we use to get information from, and manipulate a database, be it a relational database, a heirarchical database, or any other kind of database. So in short, an RDBMS is a database built with relational tables, and SQL is the language that we use to interact with those tables/database.
1.  Why do tables need a `primary key`?
    Tables need a primary key because we always need some way to uniquely identify any one row (or item) in the database. this primary key can be any one column, or combination of columns in order to accomplish this. If we didn't have primary keys, then we could potentially have more than one entry which would be indistinguishable from it's neighbors, which would give us a database which could return incomplete, or false information when we query it. 
1.  What is the name given to a table column that references the primary key
    on another table.
    The column referencing a primary key on another table is called the foreign key, this column is very important and is used as the heart of relational databases.
1.  What do we need in order to have a _many to many_ relationship between two
    tables.
    A many to many relationship is formed when an item in one table may be related to many items in the second table, and vice versa. When working with many to many relationships, we generally need to break off into one or more tables where each table has a one to many relationship with the intermediate table.

1.  What SQL statement is used to retrieve data from a table?
    The SELECT statement is used to retrieve data from a table. 
1.  What SQL clause is used to filter the results of a query?
    the WHERE statement is used to filter our data from a query.
