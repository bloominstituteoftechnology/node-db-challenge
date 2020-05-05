exports.seed = function(knex) {
    return knex('tasks').insert([
  {
    project_id: 1,
    task_notes: "1",
    task_description: "solve prime number theory",
    task_completed: false
},
{ project_id: 1, task_notes: "2", task_description: "crack cyber security",
task_completed: false },
{
    project_id: 1,
    task_notes: "3",
    task_description: "blackmail world leaders",
    task_completed: false,
},
{
    project_id: 2,
    task_notes: "1",
    task_description: "collect all the sheep in Scotland",
    task_completed: false,
},
{ project_id: 2, task_notes: "4", task_description: "profit",
task_completed: false },
{
    project_id: 2,
    task_notes: "2",
    task_description: "find Japanese investors",
    task_completed: false,
},
{ project_id: 2, task_notes: "3", task_description: "????",
task_completed: false }
    ])
  };
  