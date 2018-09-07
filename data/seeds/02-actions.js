
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { action: 'Action for React Apple Nav', notes: 'Some note', complete: false, project_id: '1'},
        { action: 'Action for React Smurfs', notes: 'Another note', complete: false, project_id: '2'},
        { action: 'Action for React Instagram', notes: 'Last note', complete: false, project_id: '3'},
        { action: 'Action for React Apple Nav 2', notes: 'Some note', complete: false, project_id: '1'},
        { action: 'Action for React Smurfs 2', notes: 'Another note', complete: false, project_id: '2'},
        { action: 'Action for React Instagram 2', notes: 'Last note', complete: false, project_id: '3'},
      ]);
    });
};