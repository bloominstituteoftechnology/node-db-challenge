
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { description: 'I want to fly the plane', notes: 'in the future', completed: false, project_id: 1 },
        { description: 'build something', notes: 'today', completed: false, project_id: 1 },
        { description: 'clean building', notes: 'next weekedn', completed: false, project_id: 3 }
      ]);
    });
};