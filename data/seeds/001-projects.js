
exports.seed = function (knex, Promise) {
  return knex('projects').insert([
    { name: 'GoofyGoober', description: "I'm a...", completed: false },
    { name: 'Jacked&Tan', description: 'Time to get...', completed: true },
    { name: 'Fallout', description: 'In the event of nuclear fallout...', completed: false }
  ]);
};
