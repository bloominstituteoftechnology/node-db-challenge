exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([{
          task_description: "watch a video",
          task_notes: "watch the first ten minutes",
          completed: 0,
          project_id: 2
        },
        {
          task_description: "watch another video",
          task_notes: "watch the first video before this one",
          completed: 0,
          project_id: 3 
        },
        {
          task_description: "watch yet another video",
          task_notes: "are you bored yet",
          completed: 0,
          project_id: 1
        }
      ]);
    });
};