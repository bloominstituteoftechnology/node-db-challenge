
exports.seed = function(knex) {
  // Deletes ALL existing entries
 
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'test'},
        {description: 'stuff'},
        {completed: true}
      ]);
    
};
