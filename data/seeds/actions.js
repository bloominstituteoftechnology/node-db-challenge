
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, description: 'Hello its me', notes: 'Be careful', completed: true, project_id: 1},
        {id: 2, description: 'fight me', notes: 'Dont be shy', completed: true, project_id: 1},
        {id: 3, description: 'run', notes: 'Gettem nice and clean', completed: false, project_id: 1},
        {id: 4, description: 'walk', notes: 'fast walk', completed: false, project_id: 1},
        {id: 5, description: 'i see you', notes: 'smile', completed: true, project_id: 2},
        {id: 6, description: 'boop', notes: 'deedeedee', completed: false, project_id: 2},
        {id: 7, description: 'what now', notes: 'please', completed: false, project_id: 2},
      ]);
    });
};
