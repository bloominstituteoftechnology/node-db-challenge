<!-- Answers to the Short Answer Essay Questions go here -->
# **Answers** 

**Q1** Explain the difference between `RDBMS` and `SQL`.

An RDBMS is a Relational Database Management System. It is the database software itself, which manages storage, querying and updating. It uses a relational model of data. SQL, the Structured Query Language, is a language which is typically used to query the RDBMS - allows you to search and manipulate data in a database. Relational databases use SQL as the main interface for manipulating data, but other database types can also support SQL. It's interesting that since relational databases all support SQL, sometimes people casually refer to them as SQL databases, but this is more of a colloquial term and not accurate. They're really just relational databases and SQL is the language that interacts with RDBMS. 

**Q2** Why do tables need a `primary key`?

Primary Keys are needed because this is the way to uniquely identify each row in your table. A database table must always have rows that are unique in some way. The Primary Key is needed to indicate that the declared column (or list of columns) constitutes a key. 

**Q3** What is the name given to a table column that references the primary key on another table.
   
Foreign Key.

**Q4** What do we need in order to have a _many to many_ relationship between two tables.

You need a join table between the two tables in order for them to be relational.

**Q5** What SQL statement is used to retrieve data from a table?

SELECT

**Q6** What SQL clause is used to filter the results of a query?

WHERE

**Q7** What are `views`? Provide one example use case for them.

A view is a stored result of a particular query.

