# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.
RDBMS - Relational Database Management System is the database software that is able to store, and update the data. 

SQL on the other hand is the language used to query through the data in the RDBMS.

1.  Why do tables need a `primary key`?
To make the data unique and insures the integrity of the data.

1.  What is the name given to a table column that references the primary key
    on another table.

    This is called a foriegn key.

1.  What do we need in order to have a _many to many_ relationship between two
    tables.

    We need a junction migration that manages the id's of the two tables. If the tables connected are bi-conditional for having many of something.

1.  What SQL statement is used to retrieve data from a table?
    Select data1, data2, data3 from DataTable
1.  What SQL clause is used to filter the results of a query?
    Where data.id = data2.data_id