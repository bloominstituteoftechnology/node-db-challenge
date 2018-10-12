
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name_project: 'Make a website', description_project: 'Do it good', completed_project: true },
        { name_project: 'Make a new website', description_project: 'Do it better', completed_project: false },
        { name_project: 'Make an app', description_project: 'Do it the B E S T ! ! !', completed_project: true }
      ]);
    });
};