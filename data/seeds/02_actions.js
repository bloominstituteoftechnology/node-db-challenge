
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'Action 1', notes: 'blah', project_id: 1},
        {description: 'Action 2', notes: 'bleh', project_id: 2},
        {description: 'Action 3', notes: 'blih', project_id: 1},
        {description: 'Action 4', notes: 'bloh', project_id: 2},
        {description: 'Action 5', notes: 'bluh', project_id: 1}
      ]);
    });
};
