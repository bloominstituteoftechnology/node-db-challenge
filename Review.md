# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.
    RDBMS typically refers to an application that manages and administers databases. SQL is a tool with many different standards used primarily to communicate with databases and the information stored.
2.  Why do tables need a `primary key`?
    Tables need a primary key because a unique identifier removes ambiguity between records. They are the main reference for establishing relationships between tables and under the hood, allow faster indexing.
3.  What is the name given to a table column that references the primary key
    on another table.
    That column would be the foreign key in the table being used as a reference.
4.  What do we need in order to have a _many to many_ relationship between two
    tables.
    A third table with foreign keys that reference the first table and the second table.
5.  What SQL statement is used to retrieve data from a table?
    The _SELECT_ statement, e.g., _SELECT * FROM table_.
6.  What SQL clause is used to filter the results of a query?
    The _WHERE_ clause, e.g., _SELECT * FROM table WHERE id > 5_.
