
exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      id: 1, 
      task_desc: 'Interview Prep',
      task_notes: 'Need to schedule mock interview',
      task_completed: false,
      project_id: 2
    },
    {
      id: 2, 
      task_desc: 'Rip carpets out',
      task_notes: '',
      task_completed: false,
      project_id: 1
    },
    {
      id: 3, 
      task_desc: 'Update resume',
      task_notes: '',
      task_completed: false,
      project_id: 2
    },
    {
      id: 4, 
      task_desc: 'Go grocery shopping',
      task_notes: '',
      task_completed: false,
      project_id: 3
    },
    {
      id: 5, 
      task_desc: 'Make shopping list',
      task_notes: '',
      task_completed: false,
      project_id: 3
    },
    {
      id: 6, 
      task_desc: 'Buy paint for kitchen',
      task_notes: '',
      task_completed: false,
      project_id: 1
    }
  ]);
};
