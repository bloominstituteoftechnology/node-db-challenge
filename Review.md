# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.

`RDBMS` or Relational Database Managment System, is a computer system that governs how a relational database works and provides an interface for performing actions on the database. `SQL` or Structured Query Language is a (mostly) standard way to interface with relational databases, some version of which is commonly used by Database Management Systems. In short, `RDBMS` is the system and `SQL` is the interface with that system.

2.  Why do tables need a `primary key`?

Tables need a primary key in order to ensure unique records and to make those records quickly fetchable. 

3.  What is the name given to a table column that references the primary key
    on another table.

Foreign key.

4.  What do we need in order to have a _many to many_ relationship between two
    tables.

We need a junction table with has one-to-many relationships with each of the two tables we want to connect.

5.  What SQL statement is used to retrieve data from a table?

SELECT

6.  What SQL clause is used to filter the results of a query?

WHERE
