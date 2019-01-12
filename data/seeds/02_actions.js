
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, description: 'cost estimate', notes: 'calculate cost estimate', project_id: 1, complete: 0 },
        {id: 2, description: 'acad design', notes: 'create drawings', project_id: 2, complete: 0 },
        {id: 3, description: 'city approval', notes: 'get approval for design', project_id: 2, complete: 0 },
        {id: 4, description: 'appropriate funds', notes: 'get the money', project_id: 3, complete: 1 },
        {id: 5, description: 'contact designer', notes: 'contact the new designer', project_id: 1, complete: 1 },
        {id: 6, description: 'check local ordinances', notes: 'just some notes', project_id: 1, complete: 1 }
      ]);
    });
};
