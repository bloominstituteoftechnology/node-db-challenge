# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.

    > RDBMS stands for Relational Database Management System and is the database software that manages data.  RDBMS is the system.  SQL is a language that interacts with that system.

2.  Why do tables need a `primary key`?

    > Each row needs to have a unique reference, where it can not be confused with other rows on the same table, and thus able to be reliably called upon. Imagine if you had two of the same address numbers on the same street. Receiving a pizza would be a bummer.

3.  What is the name given to a table column that references the primary key on another table?

    > Foreign Key.

4.  What do we need in order to have a _many to many_ relationship between two tables?

    > Needed are primary and foreign keys, that will allow a many-to-many relationship be broken down onto a one-to-many relationship by adding an additional table, while then using table-joins.

5.  What SQL statement is used to retrieve data from a table?

    > A SELECT statement.

6.  What SQL clause is used to filter the results of a query?

    > The WHERE clause.