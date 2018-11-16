# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.

RDBMS is Relational Database Management System, a system that manages the storage of data in tables as well as handles queries and adding/updating/deleting of that data.

SQL is Structured Query Language, which is a declarative language used to interact with an RDBMS. Most RDBMSs support SQL.

2.  Why do tables need a `primary key`?

A primary key is used to uniquely identify each set of data. Each table should have a primary key column which identifies each row of that table, allowing identical sets of data to be identified separately, among other things.


3.  What is the name given to a table column that references the primary key
    on another table.

Foreign key

4.  What do we need in order to have a _many to many_ relationship between two
    tables.

For a many to many relationship, we need a third table which holds foreign keys that reference the two primary tables.

5.  What SQL statement is used to retrieve data from a table?

Select

6.  What SQL clause is used to filter the results of a query?

Where