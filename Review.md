# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.
RDBMS is a database management system in which data is stored in a table format. Rows and columns are used for this, and the data is called relational because they're stored in tables. On the other hand, SQL is a languaged used to manage the database and data. Almost all RDBMS supports SQL. So one is a standard language and one is a database management system.


2.  Why do tables need a `primary key`?
Tables need primary keys so each row can be uniquely identified. If there is more than one Josh in a table, the primary key is what distinguishes them from one another.


3.  What is the name given to a table column that references the primary key on another table.
When a table column references to the primary key on another table, it's called a foreign key.


4.  What do we need in order to have a _many to many_ relationship between two tables.
For a many to many relationship between two tables, you need a table that holds foreign keys that reference the primary key on the related tables. For example, a book can have many authors, and an author can write many books.


5.  What SQL statement is used to retrieve data from a table?
To retrieve data from a table, use SELECT and FROM.


6.  What SQL clause is used to filter the results of a query?
To filter the results of a query, use WHERE.