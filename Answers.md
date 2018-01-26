Q1.) Explain the difference between RDBMS and SQL.
---
RDBMS: Relational Database Management Systems are the database software. They manage storage, querying, updating, and everything related to the db. They use a relational model of data, as suggested by the name.

SQL: Structured Query Language is a language used to query the RDBMS. 

The RDBMS is the system, while the SQL is the language used to interact with the system.

Q2.) Why do tables need a `primary key`?
---
A2.  A primary key, also called a primary keyword, is a key in a relational database that is unique for each record. You can only set constraints with primary keys, by setting a foreign key to another column which creates a relationship with the column that has the primary key set.

Q3.) What is the name given to a table column that references the primary key on another table?
---
A3.  Foreign key

Q4.) What do we need in order to have a *many to many* relationship between two tables.
---
A4.  You create many-to-many relationships differently than you do one-to-one or one-to-many. For those relationships, you simply connect the appropriate fields with a line. To create many-to-many relationships, you need to create a new table to connect the other two. This new table is called an intermediate table (or sometimes a linking or junction table).

Q5.) What SQL statement is used to retrieve data from a table?
---

A5.  SELECT statement

Q6.) What SQL clause is used to filter the results of a query?
---
A6.  WHERE

Q7a. What are views? Provide one example use case for them.
---
A view is nothing more than a SQL statement that is stored in the database with an associated name. A view is actually a composition of a table in the form of a predefined SQL query. A view can contain all rows of a table or select rows from a table. A view can be created from one or many tables which depends on the written SQL query to create a view.

Three Use Cases:

1. Views allow users to structure data in a way that users or classes of users find natural or intuitive.

2. Restrict access to the data in such a way that a user can see and (sometimes) modify exactly what they need and no more.

3. Summarize data from various tables which can be used to generate reports.
