1. **RDBMS**: is a system software to mangage databases based on the relational model. Whereas, **SQL**: is a programming language designed to manage data stored in a RDBMS and consists of _Data Definitin Language(DDL)_ and _Data Manipulation Language(DML)_.
2. Primary Key is needed because, it guarantees row-level accessibility.
3. Foriegn Key
4. we need to use third entity in order to store the mapping relationship between the two tables to build a Many to Many Relationships.
5. The SQL statement that we use to retrieve data from a given table is _SELECT_.
6. The SQL statement used for filteing results is a _WHERE_ clause.
7. A view is a SQL statement which is stored in a database with an associated name. For Example: to create a view for a student table:
        *CREATE VIEW view_student
         AS
         SELECT id, studName
         FROM student;*