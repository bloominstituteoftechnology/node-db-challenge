1. Explain the difference between `RDBMS` and `SQL`.

RDBMS (Relational Database Management System) is the database software itself, whereas SQL is a language, which is used to query the RDBMS.

2. Why do tables need a `primary key`?

It allows you to query a row individually and modify just that row instead of changing the whole table.

3. What is the name given to a table column that references the primary key on another table.

Foreign key

4. What do we need in order to have a _many to many_ relationship between two tables.

You need a third table which holds foreign keys that reference back to primary keys on the two tables.
