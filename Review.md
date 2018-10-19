# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.
A: Relational Database Management System (RDBMS) is essentially the framework on top of Structured Query Language (SQL). SQL is the language of how we write our queries and RDBMS helps us to manage these databases and adds additional features depending on the RDBMS.

2.  Why do tables need a `primary key`?
A: A primary key is a way for the DB to identify a unique record in a unique way. Primary keys makes it so that repeats of a record are not present when we are trying to access it, usually by giving it a unique number in a table.

3.  What is the name given to a table column that references the primary key on another table.
A: A foreign key is the name given to a field or collection of fields that refer to the primary key of another table. The foreign key is said to be a part of the child table & the primary key is said to be part the parent table.

4.  What do we need in order to have a _many to many_ relationship between two tables.
A: We would need to introduce a third table (aka fact table) to hold the foreign keys for the main two tables (primary keys). This is necessary so there is an established relationship and the database knows how to relate these two sets of data. In reality, we are also implementing 2 one-to-many relationships to link them together.

5.  What SQL statement is used to retrieve data from a table?
A: Select statement is what we used to get data from a table and there are many ways to choose the data we want to return.

6.  What SQL clause is used to filter the results of a query?
A: The where clause can be used to specify what results to return (i.e. where one id matches to another id).
