# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.  `RDBMS`, or "Relational Database Model Schema" is a database schema in which "tables" of data are "related" to one another upon querying.  `SQL`, or Structured Query Language, is a language most used for querying a RDBMS.


1.  Why do tables need a `primary key`? A primary key is a unique key or table index by which tables refer to each other in order to better make queries?


1.  What is the name given to a table column that references the primary key
    on another table.  Foreign key.


1.  What do we need in order to have a _many to many_ relationship between two
    tables.  Regarding RDBMS databases, many-to-many refers to the case when two or more tables have multiple relation ships with one another. In the case of the recipe cookbook database, a recipe for a saag dish (from the "recipes" table) has multiple relationships with the "ingredients" table.  Such that saag requires chicken, cumin, yogurt, and spinach.  YET!  A gordita may also require chicken and cumin (possibly spinach and yogurt).  One recipe has many ingredients, yet each ingredient may be required in multiple different recipes. 


1.  What SQL statement is used to retrieve data from a table?  `SELECT * FROM "table"`
1.  What SQL clause is used to filter the results of a query?  `WHERE * someColumn = "aSpecificColumnName"`.
