
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {id: 1, name: 'Sprint Challenge', project_description: 'Complete all tasks given in the README', complete: false},
        {id: 2, name: 'Jury Duty', project_description: 'Call in everyday to see if you need to rport for jury duty', complete: false},
        {id: 3, name: 'Walk the dog', project_description: 'Take the dog around the neighborhood', complete: false}
      ]);
    });
};
