# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.
    RDBMS (relational database management systems) are software systems that adhere to a standard for organizing data in a particular way - with tables comprised of fields and records and features like views and indices. SQL (structured query language) is a language designed to work within an RDBMS.

2.  Why do tables need a `primary key`?
    Tables need to have a designated source of unique identification that supercedes other identifying fields; primary keys are that source of identity. For example, a social security number is more like a primary key for citizens than a first name. 

3.  What is the name given to a table column that references the primary key
    on another table?
    Foreign Key

4.  What do we need in order to have a _many to many_ relationship between two
    tables?
    A third (junction/join) table to contain the foreign keys of the two tables with the many:many relationship. 

5.  What SQL statement is used to retrieve data from a table?
    SELECT data FROM table

6.  What SQL clause is used to filter the results of a query?
    WHERE condition