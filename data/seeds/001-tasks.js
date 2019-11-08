
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, project_id: 1, description: 'answer Qs in readme', notes: 'reference TK for help' },
        {id: 2, project_id: 1, description: 'build db and route handlers' },
        {id: 3, project_id: 2, description: 'find photos in magazines to use on board', notes: 'use magazines resource' },
        {id: 4, project_id: 2, description: 'find quotes online to print', notes: 'arrange with photos on board' },
        {id: 5, project_id: 3, description: 'plan website design' },
        {id: 6, project_id: 3, description: 'make structure of spa', notes: 'reference TK unit 2 for help' },
      ]);
    });
};
