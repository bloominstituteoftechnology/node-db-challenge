# Sprint Challenge for RDBMS and SQL

The purpose of this exercise is to get you used to being quizzed on _Interview
Questions_ commonly asked about Relational Database Management Systems and SQL.

Answers to your written questions will be recorded in _Answers.md_

Please work on this challenge alone, but feel free to use outside resources. You can _reference_ any old code you may have, however, please refrain from copying and pasting any of your answers. Try and understand the question and put your responses in your own words. Be as thorough as possible when explaining something. 

**Just a friendly Reminder**: Don't fret or get anxious, this is a no-pressure assessment that is only going to help guide you in the near future. This is NOT a pass/fail situation.

**Start by forking and cloning this repository.**

## Questions - Self Study 
You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1. Explain the difference between `RDBMS` and `SQL`.
1. Why do tables need a `primary key`?
1. What is the name given to a table column that references the primary key
   on another table.
1. What do we need in order to have a _many to many_ relationship between two
   tables.
1. What SQL statement is used to retrieve data from a table?
1. What SQL clause is used to filter the results of a query?
1. What are `views`? Provide one example use case for them.

## Project description

**This is just a backend. Testing your application will require the use
of Postman or something simliar.**

For this Project we'll use _Node.js_, _Express.js_ and _Knex_ to build a RESTful
API for a `Project Tracker` application that persists data to either _SQLite_ or
_MySQL_.

## General Requirements

The application let the users track `Projects`, `Actions` and `Contexts` in the
spirit of the _Getting Things Done (GTD)_ methodology.

* A project can contain many actions and can be assigned to different contexts.
  A project has:
  * a unique Id.
  * a name.
  * a description.
  * a flag that indicates if the project is complete or not.
* An action belongs to only one project and can be assigned to different contexts. An action has:
  * a unique id.
  * a description of what needs to be done.
  * a notes column to add additional information.
  * a flag that indicates if the action has been completed.
* A context can appear in multiple actions or projects. A context has:
  * a unique id.
  * a context column ('home', 'office', 'at computer').

Feel free to name the tables and fields anyway you want. Add constraints and
relationships as you see fit.

## Assignment

* Build the database and tables.
* Build the API to perform CRUD operations on all the resources (projects,
  actions, contexts).
* Build an endpoint to retrieve a `project` by its `id` that returns an object
  with the following structure:

```js
{
  id: 1,
  name: 'project name here',
  desctiption: 'the project description',
  completed: false, // or true
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
  ],
  contexts: [
    { id: 1, context: 'the context' }
    { id: 5, context: 'another context' }
  ]
}
```

Remember to run `npm init -y` to generate a _package.json_ before adding your dependencies.

_Good luck and have fun!_
