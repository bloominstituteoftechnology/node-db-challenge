1. Explain the difference between RDBMS and SQL.

* the RDBMS is the system that runs the database. Sql is the language to interact with the db.

2. Why do tables need a primary key?

* It is a unique value to identify a row.

3. What is the name given to a table column that references the primary key on another table.

* Foreign key

4. What do we need in order to have a many to many relationship between two tables.

* could use a set bigint or another table. another table is probably the best way. Need a foreign key on each schema for the relationship to handle both directions.

5. What SQL statement is used to retrieve data from a table?

* select \* from table will return everything. Select (something) from (table).

6. What SQL clause is used to filter the results of a query?

* where. select \* from table where (something).

7. What are views? Provide one example use case for them.

* In SQL, a view is a virtual table based on the result-set of an SQL statement.

A view contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database.
