
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'run today', description: 'dont break nothing' },
        { name: 'OG', description: 'triple triple triple.......nvm' },
        { name: 'this is nutts', description: 'smh we done here' }
      ]);
    });
};
