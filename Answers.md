1. Explain the difference between RDBMS and SQL. -RDBMS is a Relational Database
	Management System and SQL is the language designed for managing the data held
	in the database.

2. Why do tables need a primary key? -The primary key is used to uniquely
	identify the rows in a table. No two rows can have the same primary key which
	allows you to easily return queries from the database.

3. What is the name given to a table column that references the primary key on
	another table. -A foreign key.

4) What do we need in order to have a many to many relationship between two
	tables. -It is common practice to use a Junction Table which stores all the
	rows/fields of shared information and joins those tables Primary Keys as
	Foreign Keys. That way your not referencing multiple foreign keys all of the
	place, all the shared info is in a single table!

5. What SQL statement is used to retrieve data from a table? -To extract data
	from a table, you must use the SELECT statement. You must specify what your
	trying to select, or \* for all, then you must use the FROM statement to
	specify which table it is coming from.

6. What SQL clause is used to filter the results of a query? -The answer is the
	WHERE clause. But it must be used with SELECT and FROM first. The WHERE
	clause allows you use comparative operators to filter for exactly what your
	needing.

7. What are views? Provide one example use case for them. A view allows you to
	create a "virtual table" that is always up to date with the information you
	have it filter. Once you create a view, you can then retreive its info by
	only referencing its view-name. For example - using sqlite - you can create a
	SQL Query

CREATE VIEW [Sales24H] AS SELECT \* FROM sales WHERE order_date >=
datetime('now','-1 day');

Then since it always stays up to date, you can simply call that entire SQL query
by referencing its name [Sales24H].

SELECT \* FROM [Sales24H];

The above query would really just be doing the above command, lines 25-27.
