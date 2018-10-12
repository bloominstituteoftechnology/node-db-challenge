# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.
    SQL, or Structured Query Language, is a programming language that allows us to interact with and manipulate relational databases. The majority of digital databases today are of the relational model, and we use RDBMS or relational database management systems to manage them. These management systems use SQL. Examples of RDBMS are Sqlite, MySQL, and Oracle.

1.  Why do tables need a `primary key`?
    A primary key in a relational database acts as a uniqe identifier so that the record you want can always be retrieved without confusion. The primary key is most often an integer in the field 'id' that is automatically assigned by the database and which auto-increments every time a new record is added to the database (the first record added has an id of 1, the second has an id of 2, and so on).

1.  What is the name given to a table column that references the primary key on another table.
    This is called a foreign key. Referencing the primary key on another table establishes a relationship between the two tables.
1.  What do we need in order to have a _many to many_ relationship between two tables.
    An intermediary table that represents the many to many relationship (which in reality is just a one to many relationship on each side). For example if you have a table of fruits and a table of colors. One type of fruit can have multiple colors (apples can be red, pink,golden, or green), and one color can be identifiable with many types of fruits (orange can be identified with oranges but also peaches and apricots). It would be necessary to have an intermediary table between the two called, perhaps, 'FruitColors' that contained the fruit_id and color_id properties.
1.  What SQL statement is used to retrieve data from a table?
    select
1.  What SQL clause is used to filter the results of a query?
    where
