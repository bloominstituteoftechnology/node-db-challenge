
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'knex seed:make 01_projects', notes: 'This is the command line input', project_id: '1'},
        {description: 'Text your sister', notes: 'Your nephew is only 1 year old, so wish him happy birthday by proxy', project_id: '2'},
        {description: 'DM your PM', notes: 'Quite a catchy sounding action', project_id: '3'}
      ]);
    });
};
