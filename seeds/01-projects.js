
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1, 
          name: 'Who cares graph', 
          description: "Build a graph showing people who care about graphs vs people who don't care about graphs",
          completed: false
        },
        {
          id: 2, 
          name: 'Workout Regiment',
          description: 'Find a workout routine that suits your physique goals.',
          completed: false
        },
        {
          id: 3, 
          name: 'Organize Portfolio',
          description: 'Create a well organized portfolio of your achievements in programming.',
          completed: true
        }
      ]);
    });
};
