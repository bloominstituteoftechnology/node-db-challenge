
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        { name: 'Mason\'s birthday', description: 'Plan celebration!' },
        { name: 'Lambda Weekly', description: 'Finish week out strong!' },
      ]);
    });
};
