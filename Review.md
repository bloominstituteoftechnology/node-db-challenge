# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.

    RDBMS stands for 'Relational DataBase Management System,' and is the most widely-used type of database management system. The data is stored in a tabular format with rows (called tables) that each represent a single record and that are made up of one or more columns.

    SQL stands for 'Structured Query Language' and is the main way to interact with a Database Management system. It consists of mostly English-like commands that are declarative and concise, making it easier to learn and use effectively. SQL commands can be broken up into subcategories based around their purpose (Data Definition Language, Data Manipulation Language, Data Query Language, Data Control Language, and Transaction Control Commands).

2.  Why do tables need a `primary key`?

    Tables need a primary key in order to uniquely identify each record in the table. That way if there is are multiple objects with the same name they can still be identified by their primary key.

3.  What is the name given to a table column that references the primary key
    on another table.

    Foreign Key

4.  What do we need in order to have a _many to many_ relationship between two
    tables.

    A many to many relationship needs an extra table to hold the foreign keys that reference the primary keys on the related tables.

5.  What SQL statement is used to retrieve data from a table?

    A SELECT statement is used to retrieve data from SQL tables.

6.  What SQL clause is used to filter the results of a query?

    The WHERE clause is used to choose the rows of a table, so that the query will return only the rows that meet the given criteria.
