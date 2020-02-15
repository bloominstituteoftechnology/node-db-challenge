exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'HTML', description: 'Pretty cool', completed: false },
        {id: 2, name: 'CSS', description: 'Pretty awesome', completed: false },
        {id: 3, name: 'JavaScript', description: 'Pretty fantastic', completed: false }
      ]);
    });
};