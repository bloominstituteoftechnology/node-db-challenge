##1 Explain the difference between RDBMS and SQL.
RDBMS stands for relational database management systems.  These are programs or libraries you use to manipulate a database of the relational kind (which is where data is in tables, and the tables are related through foreign keys).  SQL is the language for doing so directly without another program or layer on top.  Most RDBMS options actually end up sending raw SQL to your database behind the scenes, although there are some newer ones that don't.  MySQL and SQLLight are examples of RDBMSes.
##2 Why do tables need a primary key?
Tables need a primary key so you have a way of referring to each individual row when joining the table to another table.  Usually, the primary key is simply an incrementing integer.
##3 What is the name given to a table column that references the primary key on another table.
The name of a table column that references the primary key on another table is a 'foreign key' because it references a 'foreign' table.
##4 What do we need in order to have a many to many relationship between two tables.
We can't use a foreign key, because there will be as many potential foreign keys in each table as there are items in the other table.  Therefore, we make a third table called a 'join table.'  This table consists of all the ids from one table, with their matches to the ids in the other column in the same row.  This can be repeated as needed until all the possible many to many relationships are represented.
