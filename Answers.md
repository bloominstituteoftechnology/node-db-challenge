## Questions - Self Study 
You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1. Explain the difference between `RDBMS` and `SQL`.

- RDBMS is the software used for a database.
- SQL or Structured Query Language is the language used to Query the database. (interact with the database)

1. Why do tables need a `primary key`?

- Without a primary key you couldn't join tables together. This would remove the relation from relational databases. Each table should have a primary key which acts as an Index in order to sort through the database and query the exact set of information you wish to display.

1. What is the name given to a table column that references the primary key
   on another table.

- Foreign Keys

1. What do we need in order to have a _many to many_ relationship between two
   tables.

- A new table should be created that holds a foreign key referencing the two primary keys or indexes that you wish to join.

1. What SQL statement is used to retrieve data from a table?

- SELECT

1. What SQL clause is used to filter the results of a query?

- WHERE and HAVING

1. What are `views`? Provide one example use case for them.

- A view is a virtual table that is a result of a SQL statement.
- A representation of this would be a store database with customers, orders, products, and suppliers.
- A use case for this would be to see how many customers purchased a particular product and how many orders there are for that product in one ``view`` allowing you to access the data in an easily digestable format and determine business related decisions.
