----------------------------
Explain the difference between `RDBMS` and `SQL`.
---------------------
RDBMS = Relational database managment system. This is a system used to manage a database capable of many different relations (one to many, one to one, etc.). It is a class of software used to handle information in such a way that data is organized into records with characteristics (as rows and columns, respectively.). SQL = Structured query language. It is used interact with such databases that are ready to be utilized. 

-----------------------------
Why do tables need a `primary key`?
---------------------------------
A primary key acts as the distinguishing characteristic of a particular record. It is unique to that record and allows it to be identified.

----------------------------------
What is the name given to a table column that references the primary key on another table. 
--------------------------
This is a "foreign key", such a key is primary on one record, as in it distinguishes it, meanwhile it is an afterthought on another record and is not necessarry for that record to exist. It is referenced for cross-informational purposes.

------------------------------
What do we need in order to have a _many to many_ relationship between two tables.
------------------------------
We need to have a join of the primary keys on each table to present a set of data displaying repeatable instances of connection from one or more primary keys to another set of primary keys.