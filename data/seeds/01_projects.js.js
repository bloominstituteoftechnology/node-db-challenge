
exports.seed = function(knex, Promise) {
  
  return knex('projects').del()
    .then(function () {
      
      return knex('projects').insert([
        {projectName: "Read", projectDescription: "Read at-least one chapter a day", completed: false},
        {projectName: "Workout", projectDescription: "Go to the gym at least 3 times a week", completed: false},
        {projectName: "Drink Water", projectDescription: "Drink at-least 1.5 liters of water daily", completed: true},
        {projectName: "Take Vitamens", projectDescription: "Take Biotin, B12, and Organic Multivitamin daily", completed: false},
      ]);
    });
};
