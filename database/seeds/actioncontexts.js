
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actioncontexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('actioncontexts').insert([
        {actionId: '1', contextId: '1'},
        {actionId: '1', contextId: '2'},
        {actionId: '4', contextId: '2'},
        {actionId: '5', contextId: '1'},
        {actionId: '6', contextId: '2'},
        {actionId: '7', contextId: '3'},
        {actionId: '8', contextId: '2'},
        {actionId: '9', contextId: '2'},
        {actionId: '10', contextId: '2'}
      ]);
    });
};
