## Questions - Self Study 

1. Explain the difference between `RDBMS` and `SQL`.
    * Relational Database Management System (RDBMS) is a database type, a relational database. SQL (Structured Query Language) is used to perform tasks within the database such as retrieve or update data.

2. Why do tables need a `primary key`?
    * A primary key is a special column designed to uniqely identify all the records in the table.  Must always be unique and cannot be null.

3. What is the name given to a table column that references the primary key on another table.
    * a foreign key

4. What do we need in order to have a _many to many_ relationship between two tables.
    * You need a junction table which is designed specifically to keep track of a many to many relationship. 

5. What SQL statement is used to retrieve data from a table?
    * select

6. What SQL clause is used to filter the results of a query?
    * where

7. What are `views`? Provide one example use case for them.
    * Serchable object in a database defined by a query. Doesn't store data.  Kinda lika a 'virtual table'.