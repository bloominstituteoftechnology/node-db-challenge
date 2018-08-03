# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.

    Relational Database management system is used for storing the data in the format that the structured query language can find by making queries with a certain criteria in order to find that record or a set of records.

3.  Why do tables need a `primary key`?
    
    A primary key is needed to have a unique identifier for each record. Foreign keys need to reference them in order for the child table to find that it belongs to that table and if we just need to get that single record from the database.

4.  What is the name given to a table column that references the primary key
    on another table.
    
    The foriegn key

5.  What do we need in order to have a _many to many_ relationship between two
    tables.

    We need a linking/junction table between the other two tables in order to create a many-to-many relationship. For example, recipes can have many ingredients and there can be multiple, duplicate ingredients in a recipe. So we would need a junction table for the recipe in order to know more about how many duplicate ingredients are added to the recipe.

6.  What SQL statement is used to retrieve data from a table?

    select * from table

7.  What SQL clause is used to filter the results of a query?

    select * from table where id = 5
