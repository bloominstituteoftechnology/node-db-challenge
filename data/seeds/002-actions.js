exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: "The first action", notes: 'Some notes', completed: false, projectId: 1},
        {description: "The second action", notes: 'Some notes', completed: false, projectId: 1},
        {description: "The third action", notes: 'Some notes', completed: false, projectId: 1}
      ]);
    });
};
