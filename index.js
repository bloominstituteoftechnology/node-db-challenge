const server = require('./server');
const PORT = process.env.Port || 4000;

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});



/* Explain the difference between Relational Databases and SQL.
SQL databases defines and manipulates data based on `structured query language`
RLDM can consists of more then just SQL
 Why do tables need a primary key?
To identify as unique and communicate with other tables
 What is the name given to a table column that references the primary key on another table.
foriegn key 
 What do we need in order to have a many to many relationship between two tables.
 must relate to another primary key (more than one) 
 */ 
