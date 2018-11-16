# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.
-->   RDBMS : An RDBMS is a Relational Database Management System. It is the database software itself, which manages storage, querying, 
      updating... Specifically, an RDBMS uses a relational model of data.
	  SQL : SQL is the programming language which is used to access this RDBMS and the database. It is the language in which you write the command regarding how and what to access in the database. 

 	  The RDBMS is the system, and SQL is the language used to interact with the database system.
    
2.  Why do tables need a `primary key`?
-->	  Tables need a `primary key` because : there is a need to distinguish data and a primary key provides a mechanism for ensuring that 
      the rows in a table are unique. ...

3.  What is the name given to a table column that references the primary key
    on another table.
-->   Foreign key
    
4.  What do we need in order to have a _many to many_ relationship between two
    tables.
-->  In order to have a many to many relationship between two tables : need to create a new table to connect the other two. This new 
     table is called an intermediate table (or sometimes a linking or junction table).

5.  What SQL statement is used to retrieve data from a table?
-->  SELECT * FROM table-name;

6.  What SQL clause is used to filter the results of a query?
-->  SELECT * FROM table-name
     WHERE condition; (where clause with select is used to filter the results of a query)
