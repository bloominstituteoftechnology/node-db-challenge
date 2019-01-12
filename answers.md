1. Explain the difference between `RDBMS` and `SQL`.

An RDBMS is a relational database management system. It is a type of software that holds and 
tracks data in tables and their relationships. It also allows for things like indexing, transactions,
triggers, and much more. If you want to have a relational database you go get an RDBMS. Examples
include: MYSQL, POSTGRES, ORACLE, AND SQLITE.

SQL is Structured Query Language. It is the language of relational databases. When building out tables
SQL is used. When performing CRUD (create, read, update, delete) operations SQL is used. Basically the
way you interact with the database schema or the data itself is with SQL. 

1. Why do tables need a `primary key`?

Tables need a primary key so the rows can be identified uniquely. Without a unique identifier
data may become duplicated and impossible to retrieve. 

1. What is the name given to a table column that references the primary key on another table.

Foreign key. 

1. What do we need in order to have a _many to many_ relationship between two tables.

We need a third table which operates as the join for the many to many relationship.