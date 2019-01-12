
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project: 'stadium', description: 'rebuild stadium', complete: 0 },
        {id: 2, project: 'highway 8', description: 'rebuild overpass', complete: 0 },
        {id: 3, project: 'balboa park', description: 'redesign entrance', complete: 1 }
      ]);
    });
};
