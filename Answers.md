*** Explain the difference between `RDBMS` and `SQL`***
 A RDBMS is a Relational Database Management System. It is the database software itself, which manages storage, querying, updating, and everything related to managing a database while SQL is the declarative language used to interact with the system
*** Why do tables need a `primary key`? ***
 Tables need a primary so that they are guaranteed to have at least one unique attribute and then can be selected and updated/modified using sql ***
*** What is the name given to a table column that references the primary key ***
Foreign key
*** What do we need in order to have a _many to many_ relationship between two
tables. ***
You need to create an intermediate table which allows you to create a mapping of a one to many 
relationship between the two tables going in each direction.
*** What SQL statement is used to retrieve data from a table? ***
select colums from TableName where criteria ;
*** What SQL clause is used to filter the results of a query? ***
where
*** What are `views`? Provide one example use case for them. ***
views are a useful way to treat sql queries as tables. They are like virtual tables and a use case is that you can have summary report data in one overview table and management can just select that table to have the information (which is always kept up to date). Another use case is security . you can restrict acces to people on view tables so you can control what information in the database they get to see. 
