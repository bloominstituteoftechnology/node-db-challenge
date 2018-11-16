Questions - Self Study
You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

#1. Explain the difference between `RDBMS` and `SQL`.

    RDBMS, or Relational Database Management Systems, is a type of database in which data is interpreted in the form of tables- that is, information is organized in a system of columns and rows. Columns represent an attribute that is common to all records in the database _(ID, name, age)_ an the rows represent individual entries into the table _(001, Edd, 32)_.

    SQL is a standard that is used across all kinds of RDBMSes. It has a clear, literal syntax that is declarative and easy to understand. Typically the most common flavor of SQL language capability, in the sense of web development, would be of the DML variety _(data manipulation language)_, in which we can perform CRUD-like operations with data.

#2. Why do tables need a `primary key`?

    The primary key in a table is what identifies a row uniquely. Each row or entry in a table uses it's primary key to identify it's entry from other entries in the table. Primary key is typically in the form of an ID and is usually set as an auto-incremented integer upon entry into the table. The primary key is also fundamentally important in
    distinguishing entries that may have the same value, such as an identical name.

#3. What is the name given to a table column that references the primary key on another table.

    The foreign key.

#4. What do we need in order to have a _many to many_ relationship between two
tables.

    A third table, or a _"junction"_, that holds 2 foreign keys which reference both of the primary keys on the two tables you wish to join.

#5. What SQL statement is used to retrieve data from a table?

    A query, typically in the form of a _SELECT_.

#6. What SQL clause is used to filter the results of a query?

    The _WHERE_ clause.
