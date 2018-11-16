# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

## 1.  Explain the difference between `RDBMS` and `SQL`.
RDBMS stands for Relational Database Management System - it refers to any specialized software that stores data in a tabular format.
SQL stands for Structured Query Language - it is the standard language used to manage databases and their contained data. 
Nearly all RDBMS support SQL.


## 1.  Why do tables need a `primary key`?
To ensure each record is unique and identifiable.


## 1.  What is the name given to a table column that references the primary key on another table.
A reference to the Primary key on another table is a Foreign Key.


## 1.  What do we need in order to have a _many to many_ relationship between two tables.
In order to have a many to many relation ship between two tables you need another table that joins the two other tables with foreign keys.


## 1.  What SQL statement is used to retrieve data from a table?
`SELECT * FROM table` would return all of the data on that table


## 1.  What SQL clause is used to filter the results of a query?
`SELECT * FROM table WHERE first_name = 'John'` -> WHERE signals the filter clause
