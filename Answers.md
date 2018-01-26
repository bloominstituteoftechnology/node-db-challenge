# 1. Explain the difference between RDBMS and SQL.

RDBMS: Relational Database Management System. Generally it is the relational database software itself, which manages storaging, querying, updating, deleting, manipulating etc. the data.

SQL: Structured Query Language. RDBMS use SQL for querying and manipulating the database.


# 2. Why do tables need a primary key?

A primary key is used to ensure data in the specific column is unique, and this ensures row-level accessibility. With primary key, you could query each table row individually and modify each row without altering other rows in the same table.


# 3. What is the name given to a table column that references the primary key on another table.

It is called a Foreign key. It's used to identify particular rows in the referenced table. Generally it is equal to the primary key, or has no value(the NULL value). The Foreign Key is what makes the data stay consistent.


# 4. What do we need in order to have a many to many relationship between two tables.

A many-to-many relationship occurs when multiple records in one talbe are associated with multiple records in another one. Usually RDBMS don't allow user to implement a direct many-to-many relationshop between two tables. In this case we could break the many-to-many relationship into two one-to-many relationships by using the Join Table. Each record in the join table includes a match filed that contains the value of the primary keys of the two tables it joins. And these matched fields are foreign keys, which are populated with data from either table it joins.



# 5. What SQL statement is used to retrieve data from a table?
SELECT statement.


# 6. What SQL clause is used to filter the results of a query?
WHERE clause.


# 7. What are views? Provide one example use case for them.
The VIEW is a virtual table based on the result-set of an SQL statement. By using SELECT statement in SQL, we could get a talbe like result-set, the fields of the result-set are from one or more real tables in the database. We could save this as a view, and it could be used repeatly. 