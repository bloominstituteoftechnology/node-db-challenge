
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {project_id: 1, description: 'ProjOneAction', notes: 'Raclette four loko put a bird on it'},
        {project_id: 2, description: 'ProjTwoAction', notes: 'Food truck freegan woke edison'},
        {project_id: 3, description: 'ProjThreeAction', notes: 'Tattooed kitsch cred skateboard.' }
      ]);
    });
};
