
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'complete this sprint', description: `'you can do it!' - Rob Schneider`, completed: false },
        { name: 'fly a kite', description: 'good day for it, thanks Florence!', completed: false },
        { name: 'become a better typer', description: 'a must for budding developers', completed: false }
      ]);
    });
};
