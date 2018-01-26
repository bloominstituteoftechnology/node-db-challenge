Explain the difference between RDBMS and SQL.  

*Answer* _RDBMS_ stands for _relational database management system_ and is generally a piece of software that organizes and stores data in a way that allows it to be easily retrieved, analyzed, and manipulated - especially with regard to comparisons between it and other data. _SQL_ stands for _structured query language_ and is simply one of the languages that can be used to work with the data contained with an RDBMS.  

Why do tables need a primary key?  

*Answer* In order for a relational databse to be relational, one needs to be able to identify and retrieve information so that it may be compared with other data. A _primary key_ constraint identifies the column or set of columns that have values that uniquely identify a row in a table. This allows for efficient retrieval and comparison of specific information, and ensures that data is not overwritten.  

What is the name given to a table column that references the primary key on another table?
*Answer*  
Foreign key  

What do we need in order to have a many to many relationship between two tables.  
*Answer*  
We need a mapping table. A _mapping table_  stores the relationship between two tables to establish and build a many to many relationship.  

What SQL statement is used to retrieve data from a table? 
*Answer*  
A _SELECT_ statement is used to retrieve data from a table 

What SQL clause is used to filter the results of a query?  
*Answer* 
The _WHERE SQL_ clause is used to filter the results of a query.  

What are views? Provide one example use case for them.
*Answer*  
Views are the result of a SQL query. A _virtual table_ that contains one or more fields from a table(s) in the database. An example case use could be:  
CREATE VIEW view_movie AS SELECT movie_id, movie_name FROM movie;  

