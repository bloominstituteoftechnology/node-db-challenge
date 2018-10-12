# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.

An RDBMS, or Relational Database Management System, describes the structure of a database and/or the software used to make it. This system manages everything to do with the database including storage, querying, and updating. Its name comes from the fact that this type of system uses a relational model, where data is grouped into related units and linked together via keys. SQL is a language commonly used to interact with a database system by querying it. It is one of a variety of languages available for working with databases. In short, RDBMS is the overall system, and SQL is one way that we as developers can interact with this system.


2.  Why do tables need a `primary key`?

A primary key is a unique identifier that is required for a few reasons. The first is that it provides a way to make sure that no two entries have the same unique value, as is the case with things like Social Security Numbers; other information in table entries such as date of birth of hometown might be the same, but the primary key provides each entry with at least one identifier that is guaranteed to be unique. This becomes important when working with other tables. If the need arises to create references to a table without a primary key, these references would have to be made to other data columns, which would potentially cause issues when certain values overlap or are duplicates. A primary key provides a simple way to make our tables joinable so that referencing them is as simple as possible.

3.  What is the name given to a table column that references the primary key
    on another table.

This is called a foreign key.

4.  What do we need in order to have a _many to many_ relationship between two
    tables.

Another table would have to be created, this one containing all the foreign keys referencing the existing tables. Without this table we would be unable to reference the ones that we are trying to access.

5.  What SQL statement is used to retrieve data from a table?

SELECT

6.  What SQL clause is used to filter the results of a query?

ORDER BY (column). This can also be assigned "asc" or "desc" as an additional property.
