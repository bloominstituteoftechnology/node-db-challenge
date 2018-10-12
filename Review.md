# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.

RDBMS stands for Relational DataBase Management Systems. This is the most widely used management system. The information is stored in tables by a series of columns and rows. Each row is a single record in the column list. A tables rows primary key represents a unique identity and a foreign key is used to link a relationship between other tables. SQL stands for Structured Query Language and is used to communicate with a database. We can use SQL to communicate with RDBMS databases to update, select, insert, and create information. 

1.  Why do tables need a `primary key`?

A Primary key is used to uniquely identify a row in a database table. That unique identifier can be used to grab that particular row when doing an SQL statement. Without a primary key it would make identifying individual elements extremely difficult. A primary key can also be used with another tables foreign key to link the two tables together. 

1.  What is the name given to a table column that references the primary key
    on another table.

A foreign key is used to reference another tables primary key. This can be used in conjunction with a join to link the two tables together in an SQL statement. It is also possible to have more than one foreign key in a table such as when working with a many to many relationship.


1.  What do we need in order to have a _many to many_ relationship between two
    tables.

In our data modeling homework we had to work with dishes, recipes, and ingredients. A dish (pizza, tacos) was to have many recipes (cheese pizza, meatlovers pizza), but a recipe could only belong to one dish. That would be an example of a one to many relationship. A recipe was to have many ingredients. However, ingredients themselves was to belong to many different recipes. This would be an example of a many to many relationship between recipes and ingredients. To make this work would it would take a central table that would contain 2 foreign keys one to link the recipes table and other to link the ingredients table. While each individual foreign key would not necessarily be unique, the combination of them would be.

1.  What SQL statement is used to retrieve data from a table?

select

1.  What SQL clause is used to filter the results of a query?

where

