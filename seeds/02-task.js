
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {task_name: 'react component', 
        notes: 'react notes', 
        project_id: 1, 
        },

        {task_name: 'axios get', 
        notes: 'axios notes', 
        project_id: 2, 
        },

        {task_name: 'dark mode', 
        notes: 'toggle time', 
        project_id: 3, 
        },
      ]);
    });
};
