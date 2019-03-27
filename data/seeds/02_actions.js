
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          id: 1,
          description: 'An unfinished actions!',
          notes: 'This action is not finished!',
          completed: false // or true
        },
        {
          id: 4,
          description: 'A finished action! belonging to project with id 4',
          notes: 'This action is finished',
          completed: true // or true
        }
      ]);
    });
};
