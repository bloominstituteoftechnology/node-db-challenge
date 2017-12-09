
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Topography', description:'Project to design Topo maps', isCompleted: true},
        {name: 'Survey', description:'Project to survey road', isCompleted: false},
        {name: 'Road Construction', description:'Project to construct a Road', isCompleted: false}
      ]);
    });
};
