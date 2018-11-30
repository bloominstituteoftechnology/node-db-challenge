
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('action')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: "Get boxes", notes: 'need big boxed for small loose items', completed: false, project_id:1},
        {description: "Drive Vehicles", notes: 'Take motorcycles and cars to new house', completed: false, project_id:1},
        {description: "Donate plasma", notes: 'Get surgeon to fill out form', completed: false, project_id:2},
        {description: "Manual labor", notes: 'Work on fathers farm stead', completed: false, project_id:2},
      ]);
    });
};
