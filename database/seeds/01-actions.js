
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { projectId: 1, description: 'Supplies', notes: 'Run to store for supplies and flux capacitor', completed: false },
        { projectId: 1, description: 'Tools', notes: 'Have a wrench, beer, and a pillow', completed: false },
        { projectId: 2, description: 'Research', notes: 'Know how to do it forst, watch cat videos on youTube', completed: false },
        { projectId: 3, description: 'Get Help', notes: 'Ask your friends, even though they will say no', completed: false },
        { projectId: 2, description: 'Work', notes: 'Do the thing', completed: false },
        { projectId: 1, description: 'Relax', notes: 'Bring the beer and the pillow', completed: false }
      ]);
    });
};
