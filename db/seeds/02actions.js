
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'Action description', notes: 'action note', project_id: 1},
        {description: 'Action description2', notes: 'action note', project_id: 1},
        {description: 'Action description3', notes: 'action note', project_id: 2},
        {description: 'Action description4', notes: 'action note', project_id: 2},
        {description: 'Action description5', notes: 'action note', project_id: 3},
        {description: 'Action description6', notes: 'action note', project_id: 3},
        {description: 'Action description7', notes: 'action note', project_id: 4},
        {description: 'Action description8', notes: 'action note', project_id: 5},
        {description: 'Action description9', notes: 'action note', project_id: 4},
        {description: 'Action description0', notes: 'action note', project_id: 5},
        {description: 'Action description11', notes: 'action note', project_id: 6},
        {description: 'Action description12', notes: 'action note', project_id: 6},
        {description: 'Action description13', notes: 'action note', project_id: 7},
        {description: 'Action description14', notes: 'action note', project_id: 7},
        {description: 'Action description15', notes: 'action note', project_id: 1},
      ]);
    });
};
