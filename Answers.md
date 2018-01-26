#Answers

* 1. Explain the difference between `RDBMS` and `SQL`.

* An RDBMS is a Relational Database Management System. It is the database software itself, which manages storage, querying, updating, and, well, everything. Specifically, an RDBMS uses a relational model of data, as the name suggests.

* 2. Why do tables need a `primary key`?

* Always best to have a primary key. This way it meets first normal form and allows you to continue along the database normalization path. You need a primary key to join tables.

* 3. What is the name given to a table column that references the primary key
   on another table.

* The foreign key.

* 4.  What do we need in order to have a _many to many_ relationship between two tables.

* A junction table. 

* 5. What SQL statement is used to retrieve data from a table?

* -SELECT- to -FROM- statement to specify what table it's coming from

* 6. What SQL clause is used to filter the results of a query?

*  The -WHERE- clause. It allows you to use comparative operators to filte for what exactly you need.

* 7. What are `views`? Provide one example use case for them.

* A view allows you to create a "virtual table" that is always up to date with the information you have it filter.

* Example is SELECT * FROM [vwProducts]



