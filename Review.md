# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

# 1.  Explain the difference between `RDBMS` and `SQL`.
      RDMBS (relational database management system) is the software that manages the storage, querying, updating, etc of the database (think DB Lite). SQL is the language that the RDMBS uses that the software is using to interact with the data. 

# 2.  Why do tables need a `primary key`?
      Tables need a 'primary key' so that you can ensure that each row is accessible and that each row has a unique primary id (this is a column in the table
      )
# 3.  What is the name given to a table column that references the primary key on another table.
      Foreign key.

# 4.  What do we need in order to have a _many to many_ relationship between two tables.
      We need "smoke and mirrors" or rather you end up creating a third table (the join table) where every record has a match field with the value of the primary keys of the two tables that it joins (the foreign keys). The foreign key fields are populated with the data that are created from either table it joins. 
      
      
      two one-to-many relationships by using a third table, called a join table. Each record in a join table includes a match field that contains the value of the primary keys of the two tables it joins. (In the join table, these match fields are foreign keys.) These foreign key fields are populated with data as records in the join table are created from either table it joins.

# 5.  What SQL statement is used to retrieve data from a table?
      A 'SELECT' statement

# 6.  What SQL clause is used to filter the results of a query?
      A 'WHERE' statement
