1. Explain the difference between `RDBMS` and `SQL`.
    RDBMS is a system to manage databases; SQL is the language used to manage data stored in a RDBMS, consisting of both DDL(data definition language) and DML(data manipulation language)

2. Why do tables need a `primary key`?
    Primary keys guarantee row-level accessibility.

3. What is the name given to a table column that references the primary key on another table?
    Foreign Key

4. What do we need in order to have a _many to many_ relationship between two tables?
    A third entity to store the mapping relationship between the two tables.

5. What SQL statement is used to retrieve data from a table?
    SELECT

6. What SQL clause is used to filter the results of a query?
    WHERE

7. What are `views`? Provide one example use case for them.
    An SQL statement stored in a database with an associated name; for example - 
        'CREATE VIEW view_object AS SELECT id, objName FROM object;'