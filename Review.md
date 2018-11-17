# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.
--RDBMS is a software such DB browser that lets you use a GUI to perform database actions as to where SQL lets you use a programming language to accomplish the same thing. The RDBMS may feel more natural to users as it can show more visual representation of the data at one time with less typing.

1.  Why do tables need a `primary key`?
--Primary keys give the tables a unique identifier that can be used as a reference if needed. Primary keys will always remain the same and cannot be given to other data objects, if that data is deleted, that key number is skipped.

1.  What is the name given to a table column that references the primary key
    on another table.
--foreign Key
1.  What do we need in order to have a _many to many_ relationship between two
    tables.
when a table has many items that can appear in many other tables such as ingredients that may end up in multiple recipes.
1.  What SQL statement is used to retrieve data from a table?
--SELECT * FROM "table_name"
1.  What SQL clause is used to filter the results of a query?
WHERE "column_name" = "something"