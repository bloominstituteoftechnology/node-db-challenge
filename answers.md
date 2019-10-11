1. Explain the difference between RDBMS and SQL.

      RDBM (Relational Database Management System) is the database software itself, which manages storage, querying, updating, and, well, everything.
      SQL (Structured Query Language,) is a language which is typically used to query the RDBMS.

  2. Why do tables need a primary key?

      Primary Keys uniquely identifies each record/row in the table. It is mandatory in order to define a Foreign Key relationship between parent and child tables.

  3. What is the name given to a table column that references the primary key on another table.

     Foreign Key

  4. What do we need in order to have a many to many relationship between two tables.

     In order to have a many to many relationship we would need to create a junction table that manages the foreign keys of the two tables we want to manage.