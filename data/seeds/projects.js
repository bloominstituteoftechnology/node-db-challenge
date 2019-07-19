
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Build Stuff', description: 'Build stuff for yourself', complete: false},
        {id: 2, name: 'Get Hired', description: 'Get a job', complete: true},
        {id: 3, name: 'Work', description: 'build stuff for your job', complete: false}
      ]);
    });
};
