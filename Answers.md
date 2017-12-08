1. Explain the difference between RDBMS and SQL.

    *RDBMS = Relational DataBase Management Systems*
    It is the database software, which manages storage, querying, updating, deleting, etc. Specifically, an RDBMS uses a relational model of data, which gives it the of utilizing power filesystem access, transactional logging, scalability, and synchronisation. 

    *SQL = Structured Query Language*
    It IS the language in which is used to query the RDBMS.

    \\So, the RDBMS is the system, and SQL is the language used to interact with the system.\\

2. Why do tables need a primary key?

    A PRIMARY KEY constraints identify the column or set of columns that have values that uniquely identify a row in a table. It is to ensure that there is only 1 of those tables so they do not get overwritten by another, and to keep data concise and away from any errors

3. What is the name given to a table column that references the primary key on another table.

    A foreign key (FK) is a column or combination of columns that is used to establish and enforce a link between the data in two tables. You can create a foreign key by defining a FOREIGN KEY constraint when you create or modify a table. 
    From Microsoft: In a foreign key reference, a link is created between two tables when the column or columns that hold the primary key value for one table are referenced by the column or columns in another table. This column becomes a foreign key in the second table.

4. What do we need in order to have a many to many relationship between two tables.

    Many-to-many relationships let you relate each row in one table to many rows in another table, and vice versa. Many-to-many relationships between tables are accommodated in databases by means of mapping tables. A mapping table contains the primary key columns of the two tables you want to relate. You then create a relationship from the primary key columns of each of those two tables to the matching columns in the mapping table.

5. What SQL statement is used to retrieve data from a table?

    The SQL SELECT Statement. The SELECT statement is used to select data from a database.

    Ex: SELECT * FROM myTable
    * = All

6. What SQL clause is used to filter the results of a query?

    The WHERE clause is used to filter records and is used to extract only those records that fulfill a specified condition.

    Ex: SELECT * FROM myTable WHERE lastName = 'Jones';

7. What are views? Provide one example use case for them.

    Views is a virtual table that contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database.

    Use them for:
    --Structure data in a way that users or classes of users find natural or intuitive.

    --Restrict access to the data in such a way that a user can see and (sometimes) modify exactly what they need and no more.

    --Summarize data from various tables which can be used to generate reports.

    Ex: CREATE VIEW view_name AS
        SELECT column1, column2
        FROM table_name
        WHERE [condition];