
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, description: 'research topic', notes: 'use online and personal resources', projectId: 3 ,completed: false},
        {id: 2, description: 'set timeline', notes: 'timeline should include deadlines', projectId: 3, completed: false},
        {id: 3, description: 'check pricing', notes: 'top 3 options', projectId: 3, completed: false}
      ]);
    });
};
