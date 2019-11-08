
exports.seed = function(knex) {
  // Inserts seed entries
      return knex('project').insert([
        {name: 'clean', description: 'lets just f clean', completed: 'true'},
        {name: 'bake', description: 'lets just f bak', completed: 'false'},
        {name: 'build house', description: 'its going to take some time', completed: 'false'}
      ]);
    
};
