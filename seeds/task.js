
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
         { description: 'chill', notes: 'snacks an stuff', project_id: 1 },
        { description: 'jog for 2hours', notes: 'notes about that', project_id: 1 },
        { description: 'eat stuff for lunch', notes: 'words blah blah blah', project_id: 1 },
        { description: 'dededed', notes: 'BOB THE BUILDER', project_id: 2 },
        { description: 'jason is freddy brother it was a scam', notes: 'george', project_id: 2 },
        { description: 'IDK', notes: 'ldojw ', project_id: 3 }
      ]);
    });
};
