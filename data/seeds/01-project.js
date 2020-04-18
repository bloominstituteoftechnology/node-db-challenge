exports.seed = function(knex){
    return knex('project').insert([
        {project_name: 'Project Name 1', project_description: 'Project 1', project_completed: false},
        {project_name: 'Project Name 2', project_description: 'Project 2', project_completed: false},
        {project_name: 'Project Name 3', project_description: 'Project 3', project_completed: false},
    ]);
};