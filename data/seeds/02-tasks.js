
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { task_name: 'Manage School Budget',
        task_notes: 'Keep Budget Clean, Spend Budget',
        task_completed: false
      },
      { task_name: 'Attend Lambda School',
      task_notes: 'Attend Meetings,Complete Homework, Manage Time',
      task_completed: false
    },
    { task_name: 'Add Marketable Skills and Keep Work Ethic',
    task_notes: 'Seek out current marketable skills, Work everyday',
    task_completed: true
  },
      ]);
    });
};
