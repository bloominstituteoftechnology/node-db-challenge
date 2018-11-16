# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.

RDBMS is a Relational Database Management System. It is the database software itself, which manages storage, querying, updating, everything.

SQL, the Structured Query Language, is a language (or a family of closely related languages or dialects) which is typically used to query the RDBMS.

1.  Why do tables need a `primary key`?
To uniquely identify rows in a table.

1.  What is the name given to a table column that references the primary key
    on another table.
    Foreign Key.

1.  What do we need in order to have a _many to many_ relationship between two
    tables.
    A many-to-many relationship occurs when multiple records in a table are associated with multiple records in another table. For example, a many-to-many relationship exists between customers and products: customers can purchase various products, and products can be purchased by many customers. In order to have two relationships between a table, we need to put in a foreign key to reference the primary key.

1.  What SQL statement is used to retrieve data from a table?
SELECT * FROM TABLE;

1.  What SQL clause is used to filter the results of a query?
WHERE