# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.
        SQL is solely a table and database configuration language that is used to interact with the system
        RDBMS is the db software that manages storage, query, update for the db. JS to sql bridge

2.  Why do tables need a `primary key`?
        To set a unique value for each entry in the table to be able to reference elsewhere

3.  What is the name given to a table column that references the primary key
    on another table.
        foreign id

4.  What do we need in order to have a _many to many_ relationship between two
    tables.
    An association table that contains foreign ids from the tables that we are looking to create relationships with.

5.  What SQL statement is used to retrieve data from a table?
    Select * (or whatever column desired) FROM (table)

6.  What SQL clause is used to filter the results of a query?
    Where