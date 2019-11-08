
exports.seed = function(knex) {
 
      return knex('tasks').insert([
        {description: 'lets clean upstairs', notes: 'not too bad', completed: 0, project_id: 1},
        {description: 'lets clean downstairs', notes: 'very bad', completed: 0, project_id: 1},
        {description: 'lets clean my room', notes: 'its ok', completed: 0, project_id: 1}
      ]);
    
};
