1. Explain the difference between `RDBMS` and `SQL`.

- The RDBMS (Relational DataBase Management System) is the system that stores all of our databases, and structures databases as tables made of rows and columns. SQL (Structured Query Language) is the pprogramming language used to interact with the database.

2. Why do tables need a `primary key`?

- For almost any database table, there can easily be two entries that have a lot of the same values in one or more columns. For example two people in a table can have the same name, or address, or even email address. Primary keys are useful for giving each entry in a table its own unique value that you can use to find that specific entry.

3. What is the name given to a table column that references the primary key on another table.

- A column that references another table's Primary Key is called a "foreign key".

4. What do we need in order to have a _many to many_ relationship between two tables.

- To have a "many to many" relationship between two tables, you need a third table to act as the middle-man between them; the middle-man table will have foreign keys referencing the two other tables.