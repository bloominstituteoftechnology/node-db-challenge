## Description

In this challenge, you **design** and build an application for managing `Projects` and `Actions` in the spirit of David Allen's _Getting Things Done (GTD)_ methodology.

Use _Node.js_, _Express.js_ and _Knex_ to build a RESTful API for a `Project Tracker` application that persists data to a _SQLite_ database.

This will be akin to the Web API that you built in the last sprint, only this time, you'll be writing the persistence layer.

- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into master (student's Repository). **Please don't merge your own pull request**
- [ ] Add your project manager as a reviewer on the pull-request
- [ ] Your project manager will count the project as complete by merging the branch back into master.

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

Use `knex` to add _data seeding_ scripts for projects and actions.

Add support for the concept of `contexts`. A context is something like _at home_, _at work_ or _at computer_. The idea is that some actions require one or more `contexts` in order to be worked on. For example, the action of _file income taxes_ may require that you are _at home_, _at computer_ and _online_ so if you are _at work_ and look at the list of pending actions you could do in your current context, filing your taxes will not be one of them.

A `context` can be applied to more than one `action`. An action can be tied to more than one context, like in the example above.

When retrieving an `action` by _id_, add a property that lists all the `contexts` related to that action.

**Remember to run `npm init -y` to generate a _package.json_ before adding your dependencies.**

_Good luck and have fun!_
