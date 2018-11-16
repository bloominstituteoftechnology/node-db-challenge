# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`. <br>
    RDBMS stands for Relational Database Management System. There are many RDBMSs in the world, including Oracle, MS SQL Server, PostgreSQL, and SQLite. SQL is "Structured Query Language", which is used to manage the data inside an RDBMS. It is standardized, though RDBMS providers sometimes add their own quirks to SQL. 
    <br><br>

2.  Why do tables need a `primary key`? <br>
    A primary key serves as the unique identifier for each record in a table. This is important because we would otherwise have no way to tell duplicate values apart. For example, the name "Bob Smith" may appear numerous times, referring to different people, in a "students" table. We'd have no way to tell them apart but for their primary key.
    <br><br>

3.  What is the name given to a table column that references the primary key on another table? <br>
    It is known as a foreign key.
    <br><br>

4.  What do we need in order to have a _many to many_ relationship between two tables. <br>
    We should make a many-to-many relationship in cases like the following: a book can have more than one author and an author can write more than one book. In order to accomplish this, we need to create a third table that holds foreign keys referencing the primary keys on the related tables. As Luis puts it, this is smoke and mirrors: it's really just two one-to-many relationships.
    <br><br>

5.  What SQL statement is used to retrieve data from a table? <br>
    SELECT * from table;
    <br><br>

6.  What SQL clause is used to filter the results of a query? <br>
    WHERE condition;