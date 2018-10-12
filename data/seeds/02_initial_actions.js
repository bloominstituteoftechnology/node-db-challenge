
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('action')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('action').insert([
        { project_id:1, description: 'Light the spark', notes: 'Start the chain reaction. Equal amounts of matter and antimatter required.', complete: true},
        { project_id:1, description: 'Record Initial Expansion Results', notes: 'Measure the initial trajectory of the space-time continuum created.', complete: true},
        { project_id:2, description: 'Monitor Complex Systems', notes: 'Identify and record the success of complex systems. Watch for any systems that mutate dimensions out of scope.', complete: false},
        { project_id:2, description: 'Extract Successful Systems', notes: 'If the complexity of any system exceeds scope, extract and educate.', complete: false},
        { project_id:3, description: 'Multivers Prep.', notes: 'Expand dimensions of experiment to incorporate multiple iterations.', complete: false}
      ]);
    });
};
