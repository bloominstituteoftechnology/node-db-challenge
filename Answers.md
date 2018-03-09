#Explain the difference between RDBMS and SQL.
The RDBMS is the database itself while SQL is the language used to query the RDBMS.

#Why do tables need a primary key?
It is needed as a point of reference for the data sets, allowing you to reference specific data and preventing duplicate references as the primary key must be unique. I believe it is also indexed, which leads to faster retrieval times.

#What is the name given to a table column that references the primary key on another table.
A foreign key.

#What do we need in order to have a many to many relationship between two tables.
A third table that pairs the IDs of the two tables to establish relationships betweeen the original tables. In the case of a table of Posts and a table of Tags, to establish the many-to-many relationship you'd want a third table such as PostTags that contains the id of a post and the id of a tag relevant to that post.

#What SQL statement is used to retrieve data from a table?
select

#What SQL clause is used to filter the results of a query?
where

#What are views? Provide one example use case for them.
A view is a virtual table defined by a query. It's a subset of the data that is available, created for the purpose of containing data that would otherwise be retrieved frequently and also to limit access to data. You might create a view of customer data that only has their names, order details, and phone numbers for sales people to reference so that they have limited access to the customer data, which could also include credit card numbers and other data that should not be provided to the salesperson.