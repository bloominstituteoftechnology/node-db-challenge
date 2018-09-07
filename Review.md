# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.


1. Explain the difference between RDBMS and SQL.

RDBMS stands for relational database management system which is an overarching term to describe a database in which tables of data are organized according to a common association. SQL is a specific language used to access information contained within such a database.  SQL is used to write queries which can generate collections of data relating to a question of interest, such as ‘How many customers do we have in each city represented in the database?’  I think of SQL as the way we can translate these kinds of questions into a language the database can understand and respond to. 

2. Why do tables need a primary key?

A primary key is an identifying term or number that is unique to each record (usually expresses as a row of entries).  Primary keys allow for efficient searching of a database. Primary keys are often located in the first column of a data table and serve as the identifier to which all indicators relate.  If we had a collection of data that included city population, city average income, city crime rate etc., then the primary key would naturally be the city since all of the variables are characteristics of the city. 

3. What is the name given to a table column that references the primary key on another table.

This would be called a foreign key.  Foreign keys are important in databases because they provide a connection between tables.  Sometimes one table is an expansion of a variable represented in another table.  An example we saw in class had to do with zoos and animals.  It was important to connect an animal with the zoo to which it belonged.  This was accomplished by giving the animal not only a a unique id of it’s own, but also a zoo_id which served as the foreign key providing the appropriate associated zoo for each animal.  This paved the way for queries relying on information about both the zoos and the animals. 

4. What do we need in order to have a many to many relationship between two tables.

A many to many relationship means that a row in one table contains several child rows in another table and vice versa.  In order to have such a relationship in a database, we need a sort of connector table in which the identifiers from related tables can be combined. 

5. What SQL statement is used to retrieve data from a table?

To get all data from a table, we use a query of the form: 

SELECT * FROM ’table_name'

6. What SQL clause is used to filter the results of a query?

To filter results of a query we apply a condition using WHERE.  If we wanted only customers from New York we could use the following:

SELECT * FROM customers
WHERE city = ’New York’
