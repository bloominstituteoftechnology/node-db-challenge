# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.


## 1. Explain the difference between `RDBMS` and `SQL`.
     + A relational database management system (RDBMS) lets one create, update, and administer a relational database. The use of Structured Query Language (SQL) has become a popular way to access relational databases. Basically, RDBMS is a model invented at IBM before SQL was invented, but SQL has been one of the most popular frameworks to integrate with relational databases. SQL is not required though.
## 2. Why do tables need a `primary key`?
     + A primary key is a table column that serves some kind of unique purpose. These columns contain values that uniquely identify each row in the tale. By having a primary key, entity integrity is enforced upon the table and guarantees unique data.
## 3. What is the name given to a table column that references the primary key
    on another table.
     + The foreign key would be a field that references the primary key. For example, if one table wanted to reference the primary key, a foreign key would reference it to uniquely identify the relationship between the two.
## 4.  What do we need in order to have a _many to many_ relationship between two
    tables.
     + A many-to-many relationship occurs when multiple records in a table are associated with multiple records in another table. For example, a many-to-many relationship exists between customers and products: customers can purchase various products, and products can be purchased by many customers.
Relational database systems usually don't allow you to implement a direct many-to-many relationship between two tables.
## 5.  What SQL statement is used to retrieve data from a table?
     + A SELECT statement begins with the SELECT keyword and is used to retrieve information from MySQL database tables. You must specify the table name to fetch data from—using the FROM keyword—and one or more columns that you want to retrieve from that table. A keyword is a word that is part of the SQL language
## 6.  What SQL clause is used to filter the results of a query?
     + The WHERE Clause. In SQL, the SELECT statement is used to return specific columns of data from a table. Similarly, the WHERE clause is used to choose the rows of a table, and the query will return only the rows that meet the given criteria.
