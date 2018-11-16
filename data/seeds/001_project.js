
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {name: 'React', description: 'React Project', complete: 0},
        {name: 'Redux', description: 'Redux project', complete: 0},
        {name: "sql", description: 'sql project', complete: 0}
      ]);
    });
};
