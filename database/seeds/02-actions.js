
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {projectId: 1, description: 'purchase papers', notes: 'dozens of papers purchased', completed: true},
        {projectId: 1, description: 'appoint cartographer', notes: 'Resumes under review', completed: false},
        {projectId: 2, description: 'Field work', notes: 'Field vist was conducted', completed: true},
        {projectId: 3, description: 'onsite office establishment', notes: 'looking or a good sitation', completed: false},
        {projectId: 3, description: 'Land fill', notes: 'Land fill is conducted', completed: true}
      ]);
    });
};
