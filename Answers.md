 Explain the difference between `RDBMS` and `SQL`.
 SQL stands for Structered Query Language and is a specific language that is used in order to manage and retrieve data that is held in a RDBMS. RDBMS is a Relational DataBase Manamgent System. The RDBMS is a system that allows you a way to manage the data that is being store, while the SQL language itself is a way of doing what you want with the data. 

 Why do tables need a `primary key`?
 A primary key is a unique key that all the columns in a row rely on. This is required so that no 2 rows have the same set of data. It can be made up of only 1 row or multiple rows, which is called a composite primary key, but it must be unique, and all data must rely on said key. 


 What is the name given to a table column that references the primary key
   on another table.
   When a a column references a primary key on another table it is called a foreign key. This allows easy reference when needing data outside the current table. 

 What do we need in order to have a _many to many_ relationship between two
   tables.
   A junction, or join,  table is needed with you have a many to many. Since each column in each row of data can only have 1 piece of data, it is necessary to create 2 many to one relationships and another  table is needed for this. 

 What SQL statement is used to retrieve data from a table?
 The select statement is needed to retrieve data. 

 What SQL clause is used to filter the results of a query? What are `views`? Provide one example use case for them.
 Where is used to filter results from a query. 
 Views are virtual tables that are a result of a SQL statement, and are just like a real table only predetermined by the statements. You can do the same things with SQL on the new vitural table that you can do on the original tables, like search and filter. 
 A good use case would be if you only want the user to be able to read or modify exactly what they need to have access to and nothing more. In this way you keep things private, or more secured by restricting access. It also helps structure the data in a way that is more natural for the user.
An example would be if you have information about a person ranging from age , sex, employment, salary, health, and hobbies. If accounting was doing a query and neede to check something, just having access to the person and their salary and hours worked would be sufficient. Different views for different use cases.