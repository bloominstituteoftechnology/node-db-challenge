exports.seed = function(knex, Promise) {
    return knex("tasks").insert([
      {
        task_description: "Read a book1",
        task_notes: "read read read",
        completed: 0,
        project_id: 1
      },
      {
        task_description: "Read a book1",
        task_notes: "read read read",
        completed: 0,
        project_id: 1
      },
      {
        task_description: "Read a book2",
        task_notes: "read read read",
        completed: 0,
        project_id: 2
      },
      {
        task_description: "Read a book2",
        task_notes: "read read read",
        completed: 0,
        project_id: 2
      },
      {
        task_description: "Read a book3",
        task_notes: "read read read",
        completed: 0,
        project_id: 3
      },
      {
        task_description: "Read a book3",
        task_notes: "read read read",
        completed: 0,
        project_id: 3
      },
      {
        task_description: "Read a book3",
        task_notes: "read read read",
        completed: 0,
        project_id: 3
      }
    ]);
  };