
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {name: 'rowValue1', description:'a', project_id:1},
        {name: 'rowValue2', description:'b', project_id:1},
        {name: 'rowValue3', description:'c', project_id:2}
      ]);
    });
};
