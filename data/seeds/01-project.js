
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      let index = 1;
      return knex('project').insert([
        {id: index++, name: 'Project1', description: 'description1', isCompleted: false },
        {id: index++, name: 'Project2', description: 'description2', isCompleted: false },
        {id: index++, name: 'Project3', description: 'description3', isCompleted: false }
      ]);
    });
};
