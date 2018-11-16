# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.
        RDBMS is the software used to manage relational database systems. 
        SQL is the language to write and use those database systems and interact with the actual data. 
        SQL can be used acrossed several different RDBMS. 

1.  Why do tables need a `primary key`?
        to ensure row level accessibility and organization. 
        It's what allows us to target and modify/interact with specific data without messing with the rest of the data around it. 

1.  What is the name given to a table column that references the primary key
    on another table.

        foreign key.


1.  What do we need in order to have a _many to many_ relationship between two
    tables.

        a third table (the "smoke and mirrors" table as luis said) that references the primary keys of the two original tables. 

1.  What SQL statement is used to retrieve data from a table?

    SELECT *
    FROM [table name]

1.  What SQL clause is used to filter the results of a query?
    WHERE [filter info]
