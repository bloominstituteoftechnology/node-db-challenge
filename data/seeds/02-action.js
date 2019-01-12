
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('action').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('action').insert([
        {action_description: 'Make backend', action_notes: 'build a RESTful API', action_completed: false, project_id: 1},
        {action_description: 'Tie API into front end', action_notes: 'Make sure to test your endpoints', action_completed: false, project_id: 1},
        {action_description: 'Create awesome front end', action_notes: 'Make it look awesome', action_completed: false, project_id: 1},
        {action_description: 'Get pictures of brisket', action_notes: 'Brisket must be smoked, no crockpot crap', action_completed: false, project_id: 2 },
        {action_description: 'Create the app', action_notes: 'Put all the pictures in the app', action_completed: false, project_id: 3 },
        {action_description: 'Get all the maps', action_notes: 'you will need a lot of maps', action_completed: false, project_id: 3 },
        {action_description: 'drive around and get the street view', action_notes: 'your going to have to 360 video the whole world', action_completed: false, project_id: 3 },
        {action_description: 'put maps on app', action_notes: 'make sure maps are accurate and up to date', action_completed: false, project_id: 3 },
      ]);
    });
};
