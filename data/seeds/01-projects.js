exports.seed = function(knex) {
  return knex('project').insert([
    {project_name: 'World Domination',
    project_description: 'Conquer the world by nerding out',
    project_completed: false
  },
  {project_name: 'Make Nerd T-Shirts',
    project_description: 'Conquer the world by selling nerd t-shirts',
    project_completed: false
  }
  ]);
};
