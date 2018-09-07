
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Start Sprint', description: "a project involving starting the sprint"},
        {name: 'Eat Breakfast', description: "a project in which you stop feeling terrible"},
        {name: 'Finish Sprint', description: "a project in which you rejoice"}
      ]);
    });
};
