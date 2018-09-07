
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'projectOne', description: 'some desacsdcription', completed: false},
        {name: 'projectTwo', description: 'some descsedription', completed: false},
        {name: 'projectThree', description: 'some dessdvcription', completed: false}
      ]);
    });
};
