
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'React Project', description: 'Trying to be more reactive'},
        {id: 2, name: 'Vue Project', description: 'Trying to view more'},
        {id: 3, name: 'Django Project', description: 'Django tango'}
      ]);
    });
};
