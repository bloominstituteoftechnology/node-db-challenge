
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, description: 'Supplies', notes: 'Run to store for supplies and flux capacitor', completed: false},
        {id: 2, description: 'Tools', notes: 'Have a wrench, beer, and a pillow', completed: false},
        {id: 3, description: 'Research', notes: 'Know how to do it forst, watch cat videos on youTube', completed: false},
        {id: 4, description: 'Get Help', notes: 'Ask your friends, even though they will say no', completed: false},
        {id: 5, description: 'Work', notes: 'Do the thing', completed: false},
        {id: 6, description: 'Relax', notes: 'Bring the beer and the pillow', completed: false}
      ]);
    });
};
