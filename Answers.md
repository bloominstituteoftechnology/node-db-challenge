1. *Explain the difference between `RDBMS` and `SQL`.*

**An RDBMS is a Relational Database Management System. It is the database software itself, which manages storage, querying, updating, and, well, everything. Specifically, an RDBMS uses a relational model of data, as the name suggests. If you want to work on an RDBMS, you’ll need to learn its implementation language (often C), relational model theory, and a lot of nitty-gritty stuff about filesystem access, transactional logging, scalability, synchronisation, and so on. SQL, the Structured Query Language, is a language (or a family of closely related languages or dialects) which is typically used to query the RDBMS. If you want to work with SQL, you just learn SQL and maybe a tiny bit of relational model theory for background. So: the RDBMS is the system, and SQL is the language used to interact with the system. In principle you could have an RDBMS that uses some other language for access, and in principle you could use SQL to interact with some other kind of database system, though in practice the two are closely coupled.**


1. *Why do tables need a `primary key`?*

**The primary key is used to identify the record(s) in each table.  Its role is evident when making queries and such.  Its purpose is to implement a relationship between two tables in a relational database and is essentially the "target" that a foreign key references.**


1. *What is the name given to a table column that references the primary key on another table?*

**As stated above, a foreign key references the primary key on another table.**


1.*What do we need in order to have a _many to many_ relationship between two tables.*

**Simply put, we need foreign keys that reference multiple primary keys which also act as foreign keys that similarly reference multiple keys.**

1. What SQL statement is used to retrieve data from a table?

**SELECT**


1. *What SQL clause is used to filter the results of a query?*

**WHERE**


1. *What are `views`? Provide one example use case for them.*

**A view is a virtual table based on the result-set of an SQL statement. A view contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database.**

*For example:* **If you have the Northwind database you can see that it has several views installed by default. The view "Current Product List" lists all active products (products that are not discontinued) from the "Products" table. The view is created with the following SQL:**
```CREATE VIEW [Current Product List] AS
SELECT ProductID, ProductName
FROM Products
WHERE Discontinued = No;
