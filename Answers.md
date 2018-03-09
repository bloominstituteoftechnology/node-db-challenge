1. Explain the difference between RDBMS and SQL.

RDBMS is the actual Relational Database Management System, requiring complex knowledge of the implementation language, theory, and many other things. SQL is a Structured Query Language to make queries from RDBMS while only knowing basics of theory and none of the more complex things. 

2. Why do tables need a primary key?

A primary key makes the entry unique and allows for logical consistency between tables.

3. What is the name given to a table column that references the primary key on another table.

Foreign key

4. What do we need in order to have a many to many relationship between two tables.

A third table called a junction table, which details the relationship between the two tables to allow joining or referencing.

5. What SQL statement is used to retrieve data from a table?

SELECT (...) FROM (...)

6. What SQL clause is used to filter the results of a query?

WHERE(...)

7. What are views? Provide one example use case for them.

A view is a virtual table created by queries of one or more table columns from one or more databases. It is not an actual table, but is stored in the database. A view could be used for security purposes because they are not permanent and only store selected information. An example of this I found is an HR administrator not wanting to share full employee information but containing a table with employee ID, name, and date of employment and can share this as needed without giving access to the full database. 