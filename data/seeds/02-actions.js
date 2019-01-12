exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { description: 'Cleaning', project_id: 1, notes:'Take out trash and wash dishes', completed: 1 },
        { description: 'Cleaning', project_id: 1, notes: 'Mop floor', completed: 1 },
        { description: 'Cooking', project_id: 2, notes: 'Go to store then cook dinner', completed: 0 },
        { description: 'Studying', project_id: 3, notes: 'Start studying', completed: 0 },
      ]);
    });
};
