Initial Commits Project Setup @FireInjun #372
https://github.com/LambdaSchool/Sprint-Challenge-RDBMS/pull/372

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

1. Explain the difference between `RDBMS` and `SQL`.
    A: RDBMS (Relational Database Management System) is an application that stores data and allows retrieval in response to specific requests called "queries".  The data is traditionally stored in objects called 'tables'.  Tables are organized in columns and rows similar to a spreadsheet.  Rows are sometimes referred as 'records' and typically reference to one 'thing' in the real world, like a person, building or company.  The system is called 'relational' because the tables can be connected or 'related' to each other by a common datum that is present in the related tables.  The datum needs to be unique to each row (i.e. record).  There are many different versions of RDBMS apps available.  Some are generic and some are highly specialized.  Well known RDBMS applications include Oracle, MySQL, Microsoft SQL Server and PostgreSQL.  

    SQL is an acronym for Structured Query Language.  SQL allows RDBMS users to extract data in a manner that meets their needs.  SQL consists of a specific syntax (like SELECT FROM...) that lets users organize and retrieve data records from specific table(s) on demand.

2. Why do tables need a `primary key`?
    A:  Primary keys are unique identifiers that allow records to be individually manipulated.

3. What is the name given to a table column that references the primary key on another table.
    A: A primary key from one table that is added to another table is called a 'foreign key'.  Foreign keys records from one table to be 'related' to records in another.  For example, a table with addresses will contain foreign keys from a 'contacts' table so that the corresponding names and address can be linked together.  This is what makes it relational.  The contact's related address can be displayed with the contact name.

4. What do we need in order to have a _many to many_ relationship between two tables.

  A:  Many-to-many relationships require an intermediate table that contains the foreign keys from each of the related tables.