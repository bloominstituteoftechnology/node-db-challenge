
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('action').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('action').insert([
        {project_id: 1, actionDescription: 'Get Photos', notes: 'Decide on layout and get qty of images needed', actionComplete: true},
        {project_id: 4, actionDescription: 'Send to printer', notes: 'Get qoute on printing cost', actionComplete: true},
        {project_id: 2, actionDescription: 'Get content for landing page', notes: 'Content needed to update page', actionComplete: true},
        {project_id: 3, actionDescription: 'Install Adobe Premiere', notes: 'Sony Vegas was installed on machine', actionComplete: true},
        {project_id: 10, actionDescription: 'Decide on Stack', notes: 'Deciding on mobile app', actionComplete: true},
      ]);
    });
};
