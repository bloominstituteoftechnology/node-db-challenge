1. Explain the difference between RDBMS and SQL.

Answer: RDBMS is the relational database management system which is a computer application that interacts with the user, other applications, and the database itself to capture ans analyze data. RDBMS is based on the relational model.

SQL is called structured query language which is used to manipulate data in RDBMS. 

2. Why do tables need a primary key?

Answer: Because the primary key will make each row in the table unique to others so that the table will meet the first normal form standard and follow along the database normalization rules. Also we could use the primary key to link data in other tables by adding foreign key in other tables to specify the uniqueness of the relationship.

3. What is the name given to a table column that references the primary key on another table.

Answer: It is called foreign key.

4. What do we need in order to have a many to many relationship between two tables.

Answer: We need a joint table which contains the primary key for each row and both foreign keys that reference the primary key on two tables. 

5. What SQL statement is used to retrieve data from a table?

Answer: We use select statement with other key words that must appear in the correct, structured way. 

6. What SQL clause is used to filter the results of a query?

Answer: We use where statement with syntax and having syntax to filter the query.

7. What are views? Provide one example use case for them.

Answer: a view is a virtual table based on the result-set of an SQL statement. 
A view contains rows and columns, just like a real table. 

For example:
```
create views vwUsers as 
select u.userId, c.cityName, c.population
from users as u
join cities as c
on u.userId=c.userId
where c.population > 10000
```
After creating the views, we could use it as follows:
```
select * from vwUsers
```