
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'Study hard', notes: 'Gonna burn the midnight candle again.', projects_id: 1},
         {id: 2, description: 'Exercise', notes: 'Need to maintain health to deal with stress.', projects_id: 1},
         {id: 3, description: 'Eat right', notes: 'Must stay healthy.', projects_id: 1},
          {id: 4, description: 'Apply to multiple companies', notes: 'Keep trying', projects_id: 2},
          {id: 5, description: 'Update resume', notes: 'Make it interesting', projects_id: 2},
          {id: 6, description: 'Buy a house', notes: 'First investment', projects_id: 3},
          {id: 7, description: 'Travel everywhere', notes: 'See the world', projects_id: 3},
      ]);
    });
};
