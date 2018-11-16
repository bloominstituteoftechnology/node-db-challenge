# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.

    RDBMS is a relational database managment system, a software that allows for the
    managing of data, querying and updating. SQL is the language we use the interact
    with our database.

1.  Why do tables need a `primary key`?

    A primary key ensures the row is unique as only 1 row can have the same primary key.

1.  What is the name given to a table column that references the primary key
    on another table.

    A foreign key

1.  What do we need in order to have a _many to many_ relationship between two
    tables.

    We need to have a table that holds foreign keys that can reference the primary key on
    the tables that are being connected.

1.  What SQL statement is used to retrieve data from a table?

    use SELECT
    example: SELECT * from cars

1.  What SQL clause is used to filter the results of a query?

    use WHERE
    example: SELECT * from cars WHERE cars.id = 1