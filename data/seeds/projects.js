exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'Race Day App',
          description: 'Extension app for Endurance Scout',
        },
        { name: 'Trello Clone App', description: 'Clone of Trello' },
      ]);
    });
};
