# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.

`SQL` is a language for querying data from a relational database. SQL is nothing more than a specification and there are several implementations of the said specification. `RDBMS` refers to an application that manages an underlying relational database by accepting `SQL` commands.

1.  Why do tables need a `primary key`?

Tables need to have a `primary key` to distinguish between the records in the table. Having a primary key allows users to unambigiously refer to a particular record in the table. Primary keys are unique.

1.  What is the name given to a table column that references the primary key
    on another table.

Foreign key.

1.  What do we need in order to have a _many to many_ relationship between two
    tables.

In order to construct a _many to many_ relationship between two tables we need to create a helper table that will have a _one to many_ relationship with each of the two tables.

1.  What SQL statement is used to retrieve data from a table?

`SELECT * FROM <table name>`

1.  What SQL clause is used to filter the results of a query?

`WHERE` clause can be used to filter results of a query with one or more conditions.
