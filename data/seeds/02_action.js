
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('action').del()
    .then(function () {
      // Inserts seed entries
      return knex('action').insert([
        {id: 1, description: 'Set up boilerplate fpr project', notes: 'This involves creating all files needed for the project and installing all packages', complete: true, project_id: 1 },
        {id: 2, description: 'Add migrations and build tables', notes: 'Use knex command to add migrations, build tables in your code editor', complete: true, project_id: 1 },
        { id: 3, description: 'Build server and create API endpoints', notes: 'Build your server and endpoints in index.js', complete: true, project_id: 1 },
        { id: 4, description: 'Answer questions', notes: 'Record all answers in README.md', complete: true, project_id: 1 },
        {id: 5, description: 'Complete stretch goals', notes: 'Complete as many stretch goals as you can', complete: false, project_id: 1}
      ]);
    });
};
