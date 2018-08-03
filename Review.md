# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.
    A: A Relational Database Management System is a program that you can use to perform CRUD operations on a relational database.

    Structured Query Language is a programming language used for accessing data from the database.

    RDBMSs utilize SQL to access its data.

1.  Why do tables need a `primary key`?
    A: Tables need a primary key for establishing index values for reference to the table's data. 

1.  What is the name given to a table column that references the primary key
    on another table.
    A: A foreign key.

1.  What do we need in order to have a _many to many_ relationship between two
    tables.
    A: We need to have two separate _one to many_ relationships established across a total of three tables.
    This will look something akin to a bridge where the middle of the bridge is the table that connects the two tables that are desired in a _many to many_ structure.

1.  What SQL statement is used to retrieve data from a table?
    A: SELECT

1.  What SQL clause is used to filter the results of a query?
    A: WHERE