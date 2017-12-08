# Answers.md #

1. Explain the difference between `RDBMS` and `SQL`.
    * RDBMS is a Relational Database Management system and SQL is a language that allows us to interact with the what the client wants. We use Knex which is a SQL query builder that is designed to be flexible and portable.

1. Why do tables need a `primary key`?
    * Tables need a primary key because it is a unique code that can be accessed specifically if it is needed to. Also, the primary key references to different Schemas that are created.

3. What is the name given to a table column that references the primary key on another table.
    * I think that name given to a table column that references the primary key on another table is called a `foreign key`.

4. What do we need in order to have a _many to many_ relationship between two tables.
    * In order to have a many-to-many relationship between two tables, we need to have a `foreign key` that references to the `id` of the table that we are trying to connect.

5. What SQL statement is used to retrieve data from a table?
    * The `SELECT` SQL statement is used to retrieve data from a table.

6. What SQL clause is used to filter the results of a query?
    * The SQL clause `WHERE` is used to filter the results of a query.

7. What are `views`? Provide one example use case for them.
    * Views are a virtual table that has been created in the SQL workbench.
    We can use views to test our program to make sure the data is being uploaded properly by creating a seed file that allows us to populate our database with tests or data that are independent of our migration files.