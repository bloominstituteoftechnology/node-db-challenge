# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.

    `RDBMS` is an application that manages an relational database by accepting `SQL` based commands. Whereas `SQL` is a specification for a language to perform Structured Queries upon data. the implementations are varied dependant upon vendor but the specification stands true in all of the implementations.

1.  Why do tables need a `primary key`?

    Tables need a `primary key` because there is a need to distinguish data in to single entities withing a sebset of a database and though this can actually be performed in diferent methodologies it all boils down to needing a `unique key` that is persistent accross the table.

1.  What is the name given to a table column that references the primary key
    on another table.

    The name givent to a table column that references the primary key on another table is `a foreign key`

1.  What do we need in order to have a _many to many_ relationship between two
    tables.

    In order to create a `_many to many_` relationship between two tables we need to create a intermediary table that will have a `_one to many_` relationship with both tables.

1.  What SQL statement is used to retrieve data from a table?

    a `SELECT` statment is used to retriene data from a table by way of syntax where talble name is posts:
    `SELECT * FROM posts`

1.  What SQL clause is used to filter the results of a query?

    The `WHERE` clause is used to filter results of a query
