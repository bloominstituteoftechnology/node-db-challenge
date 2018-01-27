1. Explain the difference between `RDBMS` and `SQL`.  An RDBMS is a Relational Database Management System. It is the database software itself, which manages storage, querying, updating, and, well, everything. Specifically, an RDBMS uses a relational model of data, as the name suggests. 

SQL, the Structured Query Language, is a language (or a family of closely related languages or dialects) which is typically used to query the RDBMS. If you want to work with SQL, you just learn SQL and maybe a tiny bit of relational model theory for background.
1. Why do tables need a `primary key`?Always best to have a primary key. This way it meets first normal form and allows you to continue along the database normalization path.  Most probably you will need a unique index, and/or a clustered index (which is PK or not) depending on your need. "PRIMARY KEY constraints identify the column or set of columns that have values that uniquely identify a row in a table. No two rows in a table can have the same primary key value.

1. What is the name given to a table column that references the primary key
   on another table.  This column, or columns, is called the primary key (PK) of the table and enforces the entity integrity of the table. Because primary key constraints guarantee unique data, they are frequently defined on an identity column.
1. What do we need in order to have a _many to many_ relationship between two
   tables.  A many-to-many relationship occurs when multiple records in a table are associated with multiple records in another table. For example, a many-to-many relationship exists between customers and products: customers can purchase various products, and products can be purchased by many customers.

1. What SQL statement is used to retrieve data from a table?
The first SQL command you will learn, and the one you will use most frequently, is SELECT. In this lesson, you begin by learning how to fetch data records from a single table.

A SELECT statement begins with the SELECT keyword and is used to retrieve information from MySQL database tables. You must specify the table name to fetch data from—using the FROM keyword—and one or more columns that you want to retrieve from that table.
1. What SQL clause is used to filter the results of a query?  The WHERE and HAVING clauses in a SELECT statement control the rows from the source tables that are used to build the result set. WHERE and HAVING are filters. They specify a series of search conditions, and only those rows that meet the terms of the search conditions are used to build the result set. Those rows meeting the search conditions are said to be qualified to participate in the result set. For example, the WHERE clause in the following SELECT statement qualifies the rows only to a specific sales territory.
1. What are `views`? Provide one example use case for them. view_name
Is the name of the view. View names must follow the rules for identifiers. Specifying the view owner name is optional.For views created with VIEW_METADATA, the browse-mode metadata returns the view name and not the base table names when it describes columns from the view in the result set.
When a view is created by using WITH VIEW_METADATA, all its columns, except a timestamp column, are updatable if the view has INSTEAD OF INSERT or INSTEAD OF UPDATE triggers. For more information about updatable views, see Remarks.