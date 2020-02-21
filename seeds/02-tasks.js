exports.seed = function(knex, Promise) {
  return knex("tasks").insert([
    {
      task: "collect required files",
      taskDescription: "gather all paperwork that need copies made",
      projectId: 1,
      completed: false
    },
    {
      task: "use copy machine",
      taskDescription: "use copy machine to make copies.",
      projectId: 1,
      completed: false
    },
    {
      task: "replace ink",
      taskDescription: "replace ik cartridge",
      projectId: 1,
      completed: false
    },
    {
      task: "clean mirror",
      taskDescription: "use windex to clean mirror",
      projectId: 2,
      completed: false
    },
    {
      task: "clean toilet",
      taskDescription: "use toilet bleach and brush to clean toilet",
      projectId: 2,
      completed: false
    },
    {
      task: "sweep floor",
      taskDescription: "sweep bathroom floor using old broom",
      projectId: 2,
      completed: false
    },
    {
      task: "sweep left lot",
      taskDescription: "sweep left parking lot at 8am",
      projectId: 3,
      completed: false
    },
    {
      task: "sweep right and back lot",
      taskDescription: "sweep both lots ar 10pm",
      projectId: 3,
      completed: false
    }
  ]);
};
