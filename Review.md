# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.
      RDMS (Relational Database Management System) stores data in tabular form. SQL (structured Query Language) is a computer language used to request specific information from the RDBMS.

2.  Why do tables need a `primary key`?
      Tables need a primary key to have a unique identifier for each row. Keys allow for indexing and are the fastest method of searching through a db.

3.  What is the name given to a table column that references the primary key on another table.
      The table column that references the primary key is called the foreign key. An SQL database can reference a maximum of 253 other tables and columns as foreign keys

4.  What do we need in order to have a _many to many_ relationship between two tables.
      In order to have a many to many relationship between two tables, we need a third table that contains foreign keys pointing to the primary keys of the two related tables.
