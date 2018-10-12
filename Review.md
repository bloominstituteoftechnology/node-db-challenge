# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.

An RDBMS is a Relational Database Management System. It is the database software itself.
SQL, the Structured Query Language, is a language which is typically used to query the RDBMS.


1.  Why do tables need a `primary key`?

Primary keys uniquely identify each entry in a table.  They are needed because there may be multiple entries that have the same name for example and the primary key allows them to still be distinctly identified.

1.  What is the name given to a table column that references the primary key
    on another table.

on another table. Foreign key.

1.  What do we need in order to have a _many to many_ relationship between two
    tables.

A joining table that sits between the two other tables that have a many to many relationship is needed.  It's purpose is to store a record for each of the combinations of the two other tables.

1.  What SQL statement is used to retrieve data from a table?

SELECT

1.  What SQL clause is used to filter the results of a query?

ORDER BY