# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

##	1.	Explain the difference between `RDBMS` and `SQL`.
*	An RDBMS is a `Relational Database Management System`. Its the software which manages the storage, querying, updating, deleting, etc.

	SQL stands for `Structured Query Language`. Queries to the database are made using SQL in order to access and manipulate the stored data.

	The RDBMS is the system and SQL is the language used to interact with the system. For example, SQLite is an RDBMS and SQL is what is used to make queries to it.

##	2.	Why do tables need a `primary key`?
*	A `primary key(PK)` functions as a unique identifier. A table must have at most one PK(although it can consist of more than one field). This ensures that the table records are not duplicated.

##	3.	What is the name given to a table column that references the primary key on another table?
*	`Foreign Key`

##	4.	What do we need in order to have a _many to many_ relationship between two tables?
*	You must create a third table(often called a `junction table`) linking the two original tables via each of their primary keys. Thusly, one record from table A can be related to one or more records in table B and vice-versa.

##	5.	What SQL statement is used to retrieve data from a table?
*	`SELECT`

##	6.	What SQL clause is used to filter the results of a query?
*	`WHERE`
