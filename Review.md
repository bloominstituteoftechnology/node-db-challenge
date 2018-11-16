# Questions - Self Study

You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Explain the difference between `RDBMS` and `SQL`.

RDBMS -> Relational DataBase Management System
This represents the entire storage structure and relationships between sets of data types that are being stored for use in CRUD operations that will eventually build the front-end facing user interface that the client renders.

SQL -> Structured Query Language
SQL is the programmatic language which builds a specific type of RDBMS and allows a user to interact and communicate with that database, specifically providing a linguistic mechanism for perfoming CRUD opertations with that database.

2.  Why do tables need a `primary key`?

The primary key serves as a unique identifier and reference point for that specific table.  Often times, data types such as strings which could contain names are not, and cannot be unique.  (Ex: Two users with the first name of "John").  Since it is necessary to be able to identify specific data in the database at times, and the whole idea of RDBMS designs are so contingent on relations between that data, a unique manner of table identification is a must, or else the entire concept of relational databasing falls apart as relations cannot be determined accurately when the components in that relation can't be uniquely identified. In other words, how can one establish how two things are related to one another if you cannot identify or know what each item in that relationship?

3.  What is the name given to a table column that references the primary key on another table.

This would be called a foreign key.


4.  What do we need in order to have a _many to many_ relationship between two tables.

Two items that relate to one another across several factors.  For example, consider street addresses and household occupancies.  With respect to the relationship between them, there are a large amount of possible street addresses with a large number of possible households with varying numbers of members who live in that house.  There is no single street address which would contain only one household occupancy statistic(one to one), nor would only one street address exists that would contain many counts of household occupancy numbers or vice versa(one to many).  For a many to many relationship, a junction table is used.  This is a table that relates the primary keys of the two table column names and creates a new table with foreign keys for each of the two.  Such as a table made from two tables - one called students, the other called classes - which is called student_classes and contains one column called student_id and the other called classes_id.

5.  What SQL statement is used to retrieve data from a table?

```sql
SELECT (--column_name, or * for all columns)
FROM (--table_name) 
```

6.  What SQL clause is used to filter the results of a query?

```sql
WHERE(--condition)
```