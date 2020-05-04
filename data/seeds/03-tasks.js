exports.seed = function(knex) {
    return knex('tasks').insert([
      {task_description: 'Compute pi to 1,000 digits',
      task_notes: 'Pi is an irrational number',
      task_completed: false
    },
    {task_description: 'Make website to sell shirts',
      task_notes: 'T-shirts are cool',
      task_completed: false
    }
    ]);
  };
  