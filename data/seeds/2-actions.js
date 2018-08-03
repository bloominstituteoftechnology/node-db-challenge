exports.seed = function(knex, Promise) {
  return knex('actions').del()
    .then(function () {
      return knex('actions').insert([
        { id: 1, description: 'bleh', notes: '...', completed: false, project_id: 1 },
        { id: 2, description: 'blah', notes: ',,,', completed: false, project_id: 1 },
        { id: 3, description: 'bluh', notes: '???', completed: false, project_id: 2 },
        { id: 4, description: 'blurg', notes: '!!!', completed: false, project_id: 2 },
        { id: 5, description: 'meh', notes: '$$$', completed: false, project_id: 3 },
        { id: 6, description: 'feh', notes: '%%%', completed: false, project_id: 3 },
      ]);
    });
};
