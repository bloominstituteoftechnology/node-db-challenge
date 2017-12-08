1. Explain the difference between `RDBMS` and `SQL`.

   Relational Database Managements system (RDBMS) is basically the software that manages databases including storage, query, update etc. SQL is the language itself also known sa Structured Query Language used to search and manipulate databases. 

2. Why do tables need a `primary key`?
   
   Primary keys give each entry in the table a unique value that cannot be shared with any other entry. Primary keys allow you to then us to have individual access and manipulation of each entry in a table.

3. What is the name given to a table column that references the primary key on another table.

  They are called foreign keys.
   
4. What do we need in order to have a _many to many_ relationship between two tables.
   
   We need a separate table or a join table, primary keys from both tables that we plan to join using the join table and  the names of the columns or fields in the two tables we want to join or add to the new table.  

5. What SQL statement is used to retrieve data from a table?
   
   The most basic SQL statement used to retrieve data is 'SELECT * FROM table'
   
6. What SQL clause is used to filter the results of a query?

   The 'WHERE' clause is a filter that is used to filter results of a query.

7. What are `views`? Provide one example use case for them.
   
   View are virtual tables which allow you to see a select portion of the data from at least one or more tables. The view themselves do not have their own data. They can be used to provide what a user can see and not see or restrict access and manipulation to sensitve parts of a database such as user passwords or financial information. 