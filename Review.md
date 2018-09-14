# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.

RDBMS is the physical entity that holds the data and is organized into tables that contain rows and columns. SQL (structured query language) is the language tht defines how data is retrieved from the RDBMS

2.  Why do tables need a `primary key`?

To ensure uniquness for at least one colummn in a database table, and is a requirement for at least a 1NF RDBMS...a normalized database

3.  What is the name given to a table column that references the primary key
    on another table.

    foreign Key

4.  What do we need in order to have a _many to many_ relationship between two
    tables.

    a book can have more than one author and an author can write more than one book and then we would need an additional table with foreign keys, into one of the standard forms (1NF, 2NF, 3NF)

5.  What SQL statement is used to retrieve data from a table?

     select * from "tablename" - retrieves all rows

6.  What SQL clause is used to filter the results of a query?

     select * from "tablename" where "criteria (column) = "?", other operators can be used such as 'like', or wildcards (*, . , %)
