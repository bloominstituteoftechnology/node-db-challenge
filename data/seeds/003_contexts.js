
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('context').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('context').insert([
        {action_id: 1, at_home: 'true', at_computer: 'false', at_bank: 'false'},
        {action_id: 2, at_home: 'false', at_computer: 'false', at_bank: 'true'},
      ]);
    });
};
