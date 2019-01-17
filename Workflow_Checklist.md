- [ ] A `projects` can contain multiple actions and has:
  - [x] a unique Id.
  - [x] a name.
  - [x] a description.
  - [] a flag that indicates if the projects is complete or not.
- [ ] An `action` belongs to only one projects. An action has:
  - [ ] a unique id.
  - [ ] a description of what needs to be done.
  - [ ] a notes column to add additional information.
  - [ ] a flag that indicates if the action has been completed.

Feel free to name the tables and fields anything you want. **Add relationships** as you see fit.

### Tasks

- [x] Build the database and tables using knex migrations. **Seeding is not needed**.
- [ ] Build the API with the following endpoints:

  - [x] POST for adding projects.
  - [ ] POST for adding actions.
  - [ ] GET for retrieving a `projects` by its `id` that returns an object with the following structure:

    ```js
    {
      id: 1,
      name: 'projects name here',
      description: 'the projects description',
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