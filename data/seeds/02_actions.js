
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'leaves', notes: 'finish in 20 minutes', completed: false, project_id: 1},
        {description: 'side of house has the hose', notes: 'leave water running for 1 hour', completed: false, project_id: 2},
        {description: 'there are two brooms', notes: 'red and blue brooms', completed: false, project_id: 3},
        {description: 'leaves', notes: 'finish in 20 minutes', completed: false, project_id: 1},
        {description: 'side of house has the hose', notes: 'leave water running for 1 hour', completed: false, project_id: 2}
      ]);
    });
};
