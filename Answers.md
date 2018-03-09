1. Explain the difference between `RDBMS` and `SQL`.

    + A relational database management system (RDBMS) lets one create, update, and administer a relational database. The use of Structured Query Language (SQL) has become a popular way to access relational databases. Basically, RDBMS is a model invented at IBM before SQL was invented, but SQL has been one of the most popular frameworks to integrate with relational databases. SQL is not required though.

2. Why do tables need a `primary key`?

    + A primary key is a table column that serves some kind of unique purpose. These columns contain values that uniquely identify each row in the tale. By having a primary key, entity integrity is enforced upon the table and guarantees unique data.

3. What is the name given to a table column that references the primary key?

    + The foreign key would be a field that references the primary key. For example, if one table wanted to reference the primary key, a foreign key would reference it to uniquely identify the relationship between the two.

4. What do we need in order to have a _many to many_ relationship between two tables.

    + A separate join table would need to be created. Primary keys each table with data flowing into the join table. Also, would need column names from both tables needing to be joined or added to new table.

5. What SQL statement is used to retrieve data from a table?

    + SELECT*FROM table

6. What SQL clause is used to filter the results of a query?

    + The clause to use for filtering results is 'where'

7. What are `views`? Provide one example use case for them.

    + Views are virtual table representations that allow a user to see the data from one or more tables. Views do not have data and only show what user can view and not view. An example of this would be restricting access from sensitive information being able to be viewed. 