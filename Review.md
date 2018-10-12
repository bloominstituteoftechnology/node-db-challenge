# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.
  RDBMS is software, SQL is a language for querying/making requests of the
  RDBMS.
  
1.  Why do tables need a `primary key`?
  To serve as a unique identifier for every row/entry. Otherwise, when
  performing CRUD (i.e. RUD) operations there would be no way to choose which row/entry
  specifically needs to be operated on.
  
1.  What is the name given to a table column that references the primary key
    on another table.
  Foreign Key
  
1.  What do we need in order to have a _many to many_ relationship between two
    tables.
  Bridge/associative/junction Table. A table that references the primary key
  of each table. It creates two one-to-many relationships (one with each table)
  and links them.
  
1.  What SQL statement is used to retrieve data from a table?
  SELECT
  
1.  What SQL clause is used to filter the results of a query?
  WHERE
