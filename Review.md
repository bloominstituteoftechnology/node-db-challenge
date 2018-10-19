# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.
        Relational, Database, Management, System is how we save and retrieve data, while Structured Query Language is how we communicate with the RDBMS, making it possible to utilize the saving and retrival of data from a database.

1.  Why do tables need a `primary key`?
        It is a way to more or less gurantee every single piece of data in a database has 
        something truely unique to identify it with, so there are no mishaps when trying to manipulate the data, such as duplicates, or over wriing something you didn't want to.
1.  What is the name given to a table column that references the primary key
    on another table.
        id
1.  What do we need in order to have a _many to many_ relationship between two
    tables.
        we need a third table that holds foreign keys that reference the primary keys from the other tables.
1.  What SQL statement is used to retrieve data from a table?
        DML, data manipulation language
        SELECT whatYouWant FROM tableName
1.  What SQL clause is used to filter the results of a query?
        WHERE