
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {projectId: 1, colName: 'rowValue1'},
        {projectId: 2, colName: 'rowValue2'},
        {projectId: 3, colName: 'rowValue3'}
      ]);
    });
};
