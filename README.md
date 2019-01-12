# Sprint Challenge: RDBMS and SQL - Projects & Actions

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored Adding Data Persistence to Web API's and you were taught the following modules: Introduction to Relational Databases and SQL, Inserting and Modifying Data, Querying Data; Migrations and Seeds and Introduction to Data Modeling. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency Adding Data Persistence to Web APIs and your command of the concepts and techniques in the Introduction to Relational Databases and SQL, Inserting and Modifying Data, Querying Data; Migrations and Seeds and Introduction to Data Modeling modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager.

## Description

In this challenge, you build an application that lets users track `Projects` and `Actions` in the spirit of David Allen's _Getting Things Done (GTD)_ methodology.

Use _Node.js_, _Express.js_ and _Knex_ to build a RESTful API for a `Project Tracker` application that persists data to a _SQLite_ database.

This will be akin to the Web API that you built in the last sprint, only this time, you'll be writing the persistence layer.

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

1. Explain the difference between `RDBMS` and `SQL`.

A relational database management system (RDBMS) is a collection of programs and capabilities that enable 
IT teams and others to create, update, administer and otherwise interact with a relational database. 
Most commercial RDBMSes use Structured Query Language (SQL) to access the database, although SQL 
was invented after the initial development of the relational model and is not necessary for its use.
RDBMS is the database software itself, which manages storage, querying, updating, and, well, everything. 

SQL, the Structured Query Language, is a language (or a family of closely related languages or dialects) which is 
typically used to query the RDBMS. If you want to work with SQL, you just learn SQL and maybe a tiny bit of relational 
model theory for background.

So it comes down to this: RDBMS is the system, and SQL is the language used to interact with the system.

1. Why do tables need a `primary key`?

A primary key is used to accomplish two things: ensure a unique row identifier AND provide for enforcement of referential integrity. 
That second one is important because it separates the primary key from simply a uniqueness constraint. 
Generally speaking tables should have a primary key especially if you are using it as a relational database. 

A good example of where you need one but not the other is a many-many resolution table (also called an associative entity). 
This table in its simplest form consists of two columns each containing a foreign key reference to another table. 
This table doesn't need a primary key but it does need a unique constraint since every combination should occur only once.

1. What is the name given to a table column that references the primary key on another table.

A foreign key is used to link two tables together. It is a field (or collection of fields) in one table that refers 
to the primary key in another table. The table containing the foreign key is called the child table, and the table containing the 
candidate key is called the referenced or parent table. It can also be called a referencing key.

1. What do we need in order to have a _many to many_ relationship between two tables.

Need to create a joining table or bridging table. This consists of two columns. Each of them being primary keys from
the other two tables. This new table will contain separate records for each combination of the two primary key columns.
Though the two colums in the new table were primary keys they will have repeated values in the new table. 

Every field that is used must contain a primary key.


## Minimum Viable Product

**NOTE** There is no boilerplate for you for this project. You will need to take the steps necessary for creating this project from scratch. Start by initializing your project with a `package.json` file and go from there.

- [ ] A `project` can contain multiple actions and has:
  - [ ] a unique Id.
  - [ ] a name.
  - [ ] a description.
  - [ ] a flag that indicates if the project is complete or not.
- [ ] An `action` belongs to only one project. An action has:
  - [ ] a unique id.
  - [ ] a description of what needs to be done.
  - [ ] a notes column to add additional information.
  - [ ] a flag that indicates if the action has been completed.

Feel free to name the tables and fields anything you want. **Add relationships** as you see fit.

### Tasks

- [ ] Build the database and tables using knex migrations. **Seeding is not needed**.
- [ ] Build the API with the following endpoints:

  - [ ] POST for adding projects.
  - [ ] POST for adding actions.
  - [ ] GET for retrieving a `project` by its `id` that returns an object with the following structure:

    ```js
    {
      id: 1,
      name: 'project name here',
      description: 'the project description',
      completed: false, // or true, the database will return 1 for true and 0 for false
      actions: [
        {
          id: 1,
          description: 'action description',
          notes: 'the action notes',
          completed: false // or true
        },
        {
          id: 7,
          description: 'another action description',
          notes: 'the action notes',
          completed: false // or true
        }
      ]
    }
    ```

## Stretch Problem

This section is **optional** and not counted towards MVP. Start working on it after you're done with the main assignment.

Add the remaining CRUD operations for projects and actions.

Use `knext` to add _data seeding_ scripts for projects and actions.

Add support for the concept of `contexts`. A context is something like _at home_, _at work_ or _at computer_. The idea is that some actions require one or more `contexts` in order to be worked on. For example, the action of _file income taxes_ may require that you are _at home_, _at computer_ and _online_ so if you are _at work_ and look at the list of pending actions you could do in your current context, filing your taxes will not be one of them.

A `context` can be applied to more than one `action`. An action can be tied to more than one context, like in the example above.

When retrieving an `action` by _id_, add a property that lists all the `contexts` related to that action.

**Remember to run `npm init -y` to generate a _package.json_ before adding your dependencies.**

_Good luck and have fun!_
