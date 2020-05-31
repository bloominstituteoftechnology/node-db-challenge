
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        { id: 1, resource_name: 'rowValue1', resource_desc: 'rowValue1' }
      ]);
    });
};
