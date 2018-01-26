# Explain the difference between RDBMS and SQL.
* An RDBMS is a Relational Database Management System. It is the database software itself, which manages storage, querying, updating, and, well, everything. Specifically, an RDBMS uses a relational model of data, as the name suggests.
# Why do tables need a primary key?
* Most probably you will need a unique index, and/or a clustered index (which is PK or not) depending on your need. "PRIMARY KEY constraints identify the column or set of columns that have values that uniquely identify a row in a table. No two rows in a table can have the same primary key value.
# What is the name given to a table column that references the primary key on another table.
* Foreign Key
# What do we need in order to have a many to many relationship between two tables.
* joins table
# What SQL statement is used to retrieve data from a table?
* Select asterisk from
# What SQL clause is used to filter the results of a query?
* the where clause
# What are views? Provide one example use case for them.
* In SQL, a view is a virtual table based on the result-set of an SQL statement. A view contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database.