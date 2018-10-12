# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.
    RDBMS stands for Relational Database Management System and it is a software program that allows us to interact with a database. SQL stands for Structured Query Language and it is the languare for manipulating and retrieving data in databases. RDBMS use SQL to interact with a database yet sometimes also provide a GUI to work with databases, yet under the hood it is SQL that communicates with the database.

2)  Why do tables need a `primary key`?
    Primary key is a unique identifier for each row in a table. It is needed to identify each record in a database.

3)  What is the name given to a table column that references the primary key
    on another table.
    Foreign keys
4)  What do we need in order to have a _many to many_ relationship between two
    tables.
    We need a separate table that references the primary of both tables to have a many to many relationship.

5)  What SQL statement is used to retrieve data from a table?
    The SELECT statement is used to retrieve data from a table. Example: SELECT \* FROM customers

6)  What SQL clause is used to filter the results of a query?
    The WHERE clause is used to filter results. Example: SELECT \* FROM customers WHERE id = 'id'
