# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.

RDBMS is a MANAGEMENT SYSTEM - it's the database software itself, so it handles storage, querying, and updating the data in a db. SQL is a LANGUAGE that is used to interact with the system. So for example, SQLite is the RDBMS and SQL is the language you'd use to interact with it.

1.  Why do tables need a `primary key`?

Tables need primary keys so that each item in the table can have a unique identifier. The identifier shouldn't have any relation to the rest of the data in a table. The primary key should never change.

1.  What is the name given to a table column that references the primary key
    on another table.

A foreign key

1.  What do we need in order to have a _many to many_ relationship between two
tables.

You could use a third table with 2 forgeign keys, and that can link your other 2 tables

1.  What SQL statement is used to retrieve data from a table?

SELECT

1.  What SQL clause is used to filter the results of a query?


WHERE