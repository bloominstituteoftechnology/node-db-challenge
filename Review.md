# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.

RDBMS is the system, and SQL is the language (or family of languages) used to interact with that systerm. RDBMS could be done by hand, if you were a massive masochist, but SQL by hand makes no sense; it's a computer language.

1.  Why do tables need a `primary key`?

Basically to guarantee that there will always be a not-null, unique piece of information about each resource, so that resources never get confused with each other or get lost in the depths of the database.

1.  What is the name given to a table column that references the primary key
    on another table.

A Foreign Key Constraint.

1.  What do we need in order to have a _many to many_ relationship between two
    tables.

We need a third table, in which the rows represent combinations of the many-to-many resources.

1.  What SQL statement is used to retrieve data from a table?

select * from _____.

1.  What SQL clause is used to filter the results of a query?

where