Explain the difference between RDBMS and SQL.
Why do tables need a primary key?
What is the name given to a table column that references the primary key on another table.
What do we need in order to have a many to many relationship between two tables.

1. So I'm not sure if it's a 100% correct answer. But anyway.

An RDBMS is a Relational Database Management System. It is the database software itself, which manages storage, querying, updating and doing other stuff.

SQL, the Structured Query Language, is a language which is typically used to query the RDBMS. So: the RDBMS is the system, and SQL is the language used to interact with the system.

2. PRIMARY KEY constraints identify the column or set of columns that have values that uniquely identify a row in a table. No two rows in a table can have the same primary key value. You cannot enter NULL for any column in a primary key.

3. Foreign key

4. Third table that will have foreign keys referencing to the primary keys of those two tables. 