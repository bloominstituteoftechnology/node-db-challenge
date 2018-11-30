# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`. 

-RDBMS is the database software itself. It manages database storage, querying, updating. SQL is a language designed for managing data stored within a RDBMS system. You could technically use a different language to interact with an RDBMS system, and you could technically use SQL to interact with other types of databases. But in practice the two usually go hand-in-hand.

1.  Why do tables need a `primary key`?

-We need unique identifiers for each record stored in a database, in order to iterate through the db and find particular items. Otherwise, what's the point in storing data if you can't sort through the db and find it later? I mean, you could do that if you want to, but it wouldn't be very useful. 

1.  What is the name given to a table column that references the primary key on another table.

-I assume you're referring to the foreign-key column. When one table references the primary key of another table, that column is called foreign-key.

1.  What do we need in order to have a _many to many_ relationship between two tables.

-We need to create a third table to store the foreign keys associated with the related records from each table. It's a tricky concept that I've admittedly not mastered yet. 

1.  What SQL statement is used to retrieve data from a table? 

-We use a "select" statement to retrieve records from a database.

1.  What SQL clause is used to filter the results of a query?

-We use "where" to introduce a conditional statement to sort through records on a database. It works similar to the "filter()" array method, in that it lets you iterate through a table and only return records that satisfy the conditional statement. 