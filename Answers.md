## Explain the difference between `RDBMS` and `SQL`.
RDBMS stands for Relational Database Management System, which is the database software that provides a relational database. SQLite and MYSQL are RDBMS. SQL (Strucutred Query Language) is the language used to interact with the database software.

## Why do tables need a `primary key`?
A primary key is a unique index and acts as a unique identifier for a column. Tables should have at least one unique constraint to ensure no duplicate rows.

## What is the name given to a table column that references the primary key on another table.
Foreign key

## What do we need in order to have a _many to many_ relationship between two tables.
Another table that has the primary keys of both tables

## What SQL statement is used to retrieve data from a table?
SELECT

## What SQL clause is used to filter the results of a query?
WHERE

## What are `views`? Provide one example use case for them.
A view is a query stored as an object. Acts as a viritual table consisting of columns from one or more tables.