
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { description_action: 'Set up HTML', notes_action: '', completed_action: true, project_id: 1 },
        { description_action: 'Install plugins', notes_action: 'Use LESS and knex', completed_action: true, project_id: 1 },
        { description_action: 'Create component library for React', notes_action: 'do this', completed_action: false, project_id: 2 }
      ]);
    });
};