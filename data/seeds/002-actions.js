
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'Brine turkey', notes: 'start 24 hours before cooking', completed: 1, project_id: 1},
        {description: 'Bake turkey', notes: 'preheat oven to 500f, bake directly on stone', completed: 0, project_id: 1},
        {description: 'Carve turkey', notes: 'let rest half an hour before carving', completed: 0, project_id: 1},
        {description: 'Roast pumpkin in oven with butter', notes: 'can substitute butternut squash, then puree', completed: 1, project_id: 2},
        {description: 'Make custard and combine with pumpkin puree', notes: 'can keep in fridge for three days before baking', completed: 1, project_id: 2},
        {description: 'Bake pie', notes: 'bake at 375f for 25 minutes or until center is almost set', completed: 1, project_id: 2},
        {description: 'Cook rice', notes: 'cook ahead of time and allow to cool', completed: 1, project_id: 3},
        {description: 'Roast delicata squash', notes: 'roast with brown sugar at 400f', completed: 1, project_id: 3},
        {description: 'Combine with other ingredients', notes: 'combine with feta, fresh herbs, and cranberries', completed: 0, project_id: 3},
      ]);
    });
};
