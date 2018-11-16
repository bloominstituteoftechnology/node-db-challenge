
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'learn databases', desription: 'learning is fun', completed: 'false' },
        {name: 'get job', desription: 'money can be exchanged for goods and services', completed: 'false' },
      ]);
    });
};
