# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.

A RDBMS is a database management system based on the relational model. SQL is a domain-specific language used in programming and designed for managing data held in a RDMS.

1.  Why do tables need a `primary key`?

A primary key is needed to accurately point to a specific record in a table.

1.  What is the name given to a table column that references the primary key
    on another table.

A foreign key.

1.  What do we need in order to have a _many to many_ relationship between two
    tables.

Create a new table that references the primary key of each of the 2 tables as foreign keys.

1.  What SQL statement is used to retrieve data from a table?

SELECT \*(or column name(s seperated by commas)) FROM (table name);

1.  What SQL clause is used to filter the results of a query?

(SELECT statement) WHERE (condition);
