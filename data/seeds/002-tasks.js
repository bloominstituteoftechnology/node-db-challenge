
exports.seed = function(knex) {
 
      return knex('tasks').insert([
        {description: 'lets clean upstairs', notes: 'not too bad', completed: 'true', project_id: 1},
        {description: 'lets clean downstairs', notes: 'very bad', completed: 'true', project_id: 1},
        {description: 'lets clean my room', notes: 'its ok', completed: 'true', project_id: 1}
      ]);
    
};
