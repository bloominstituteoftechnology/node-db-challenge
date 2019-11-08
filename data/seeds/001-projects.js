
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'complete sprint challenge', description: 'spring challenge on database management and SQL on nov 8 2019' },
        {id: 2, name: 'make a vision board', description: 'add lots of photos and quotes to a corkboard for inspiration' },
        {id: 3, name: 'work on personal portfolio', description: 'design a portfolio site to display the projects i\'ve worked on' }
      ]);
    });
};
