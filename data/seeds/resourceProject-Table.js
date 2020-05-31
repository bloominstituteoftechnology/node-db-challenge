
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resourceProject').del()
    .then(function () {
      // Inserts seed entries
      return knex('resourceProject').insert([
        { id: 1, project_id: 1, resource_id: 1 }
      ]);
    });
};
