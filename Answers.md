1. Explain the difference between `RDBMS` and `SQL`.

      The Relational Database Management System (RDBMS) is the system that stores all of our databases and structures databases as tables made of rows and columns. Structured Query Language (SQL) is the programming language used to interact with the database.

1. Why do tables need a `primary key`?
      
      Primary key constraints identify the column or set of columns that have vaules that uniquely identify a row in a table. The are neccesary to ensure that no two rows have the same primary key value. 


1. What is the name given to a table column that references the primary key on another table.

      A foreign key is the given name to a table column that references the primary key on another table.

1. What do we need in order to have a _many to many_ relationship between two tables.

      To have a many-to-many relationship between two tables, a third table needs a to be added to act as the join table. The join table will hold foreign keys referencing the two other tables.