## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

1. Explain the difference between `RDBMS` and `SQL`.

 * A `RDMBS`, or relational database management system is a style or type of database comprised of multiple `tables` of data, aspects of which may _relate_ to data (or aspects of data) contained within other tables. `SQL` is a programming language used to interact with/perform `CRUD` operations on tables within a specific `RDBMS`.

1. Why do tables need a `primary key`?

 * Tables need primary keys so that the data within the table can be referenced specifically, via SQL or the creation of a _foreign key_ in another table.

1. What is the name given to a table column that references the primary key on another table.

 * The term given to this table column is _foreign key_, in that the key that it references is from another, or a foreign table.

1. What do we need in order to have a _many to many_ relationship between two tables.

 * Due to the nature of foreign keys, they can't be applied to many to many relationships, and thus a new table must be created in order to reference both tables simultaneously.
