# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.
    RDBMS(Relational Database Management System) refers to any specialized software that stores data in a tabular format.
    SQL(Structured Query Language) is the standard language used to manage databases and their contained data. 
    Nearly all RDBMS support SQL.
1.  Why do tables need a `primary key`?
    A primary key uniquely identifies each record in the table. There might be more than one John Smith and a clients table, but each of then can be distinctly identified by their primary key.
1.  What is the name given to a table column that references the primary key
    on another table.
    Foreign key 
1.  What do we need in order to have a _many to many_ relationship between two
    tables.
    We need to have a third table that holds foreign keys that reference the primary key on the related tables.
1.  What SQL statement is used to retrieve data from a table?
    select * from 'table name' This will retrieve the all the data from a specific table.
1.  What SQL clause is used to filter the results of a query?
    The where clause is used to filter the results of a query.
