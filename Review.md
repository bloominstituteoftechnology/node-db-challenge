# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.Explain the difference between `RDBMS` and `SQL`.

RBDMS are the frameworks that sit atop SQL to add functionality and make developers lives easier. SQL is how we write our queries and RDBMS helps us to better manage and manipulate these databases by providing additional features when desired.

2.Why do tables need a `primary key`?

A primary key is a way for the DB to identify a unique record in a unique way. Primary keys makes it so there are not repeats of a record when we are trying to access it by usually giving it a unique number in a table.

3.What is the name given to a table column that references the primary key on another table.

A foreign key is/are field(s) that reference the primary key of a given table. The foreign key is often said to be a part of the child table and the primary key is said to be part the parent table.

4.What do we need in order to have a _many to many_ relationship between two tables.

We would need to introduce a fact table to hold the foreign keys for the main primary keys. In truth we are simply implementing 2 one-to-many relationships to forge a link. Smoke and mirrors.

5.What SQL statement is used to retrieve data from a table?

Select statement

6.What SQL clause is used to filter the results of a query?

Where clause
