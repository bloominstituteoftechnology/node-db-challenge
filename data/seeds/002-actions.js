
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, description: 'git add', notes: 'add using .', complete: 0 },
        {id: 2, description: 'git commit', notes: 'commit with a message', complete: 0 },
        {id: 3, description: 'git push', notes: 'push and then pull', complete: 0 },
        { id: 4, description: 'bake brownies for movie night', notes: 'bring to school', complete: 0 },
        { id: 5, description: 'search for events', notes: 'Google NYC events for kids', complete: 0 }
      ]);
    });
};
