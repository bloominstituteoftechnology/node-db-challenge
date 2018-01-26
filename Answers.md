### 1. Explain the difference between RDBMS and SQL

- A RDBMS is a management system that lets you perform CRUD operations on a database. SQL is the Structured Query Language that is used to perform these actions.

### 2. Why do tables need a primary key?

- Used primarily to differentate a key from another table such as a unique key, typically is the id.

### 3. What is the name given to a table column that references the primary key on another table.

- This is called a foreign key.

### 4. What do we need in order to have a many to many relationship between two tables.

- You need a seperate intermediary table that references the ids of the two tables you are trying to make a relationship with.

### 5. What SQL statement is used to retrieve data from a table?

- SELECT statement i.e. ```SELECT * FROM [TABLE]```

### 6. What SQL clause is used to filter the results of a query?

- The WHERE statement

### 7. What are views? Provide one example use case for them.

- views are similar to functions in the sense that they are queries that are used multiple times. A view is created (the query) so that it may be accessed more easily.