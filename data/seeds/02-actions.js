exports.seed = function(knex, Promise) {
  
  return knex('actions').del()
    .then(function () {
      
      return knex('actions').insert([
        {actionDescription: "Pick new book", actionNotes: "Something about tech", completed: 0, projectId: 1},
        {actionDescription: "Workouts", actionNotes: "weight-training, cardio, yoga", completed: 0, projectId: 2},
        {actionDescription: "Get gym bag ready", actionNotes: "wash gear and pack headphones", completed: 0, projectId: 2},
        {actionDescription: "Grab case of Smart water's", actionNotes: "15 pack from sam's", completed: 1, projectId: 3},
        {actionDescription: "Morning Vits", actionNotes: "take vitamens with full glass of water right out of bed", completed: 0, projectId: 4},
      ]);
    });
};
