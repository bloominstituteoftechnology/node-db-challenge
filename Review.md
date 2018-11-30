# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.
    * An RDMMS is a Relational Database Management System. Structured Query Language is the tool (language) used to communicate with an RDBMS. 
2.  Why do tables need a `primary key`?
    * A Tables primary key serves as a unique identfier for each row (record). The PK allows for indexing.
3.  What is the name given to a table column that references the primary key on another table.
    * A foreign key.
4.  What do we need in order to have a _many to many_ relationship between two tables.
    * We need a third table that contains foreign keys pointing to the primary keys of the two related tables. An easy tool to use for this Mircosoft SQL Server Management Studio.

5.  What SQL statement is used to retrieve data from a table?
    * SELECT
6.  What SQL clause is used to filter the results of a query?
    * WHERE

 //create knex file: knex init
 //knex migrate:make projects_table
 //knex migrate:make actions_table

