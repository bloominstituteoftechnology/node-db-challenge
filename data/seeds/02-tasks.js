exports.seed = function(knex){
    return knex('task').insert([
        {task_description: 'task 1', notes: 'task note 1', task_completed: false, project_id: 1},
        {task_description: 'task 2', notes: 'task note 2', task_completed: false, project_id: 2},
        {task_description: 'task 3', notes: 'task note 3', task_completed: false, project_id: 3},
        {task_description: 'task 4', notes: 'task note 4', task_completed: false, project_id: 1},
    ]);
};