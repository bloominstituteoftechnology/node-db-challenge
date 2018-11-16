
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { description: 'Build the Foundation', notes: 'Buy Cement', projectId: 1 },
        { description: 'Frame the building', notes: 'Need 2X4s', projectId: 1 },
        { description: 'Furnish', notes: 'Go to Ikea', projectId: 1 },
        { description: 'Cook Noodles', notes: 'Wheat Noodles', projectId: 2 },
        { description: 'Add Sauce', notes: 'with Mushrooms', projectId: 2 },
        { description: 'Season Stuff', notes: 'Extra Spicy', projectId: 2 },
        { description: 'Remove Transmission', notes: 'Recyclable?', projectId: 3 },
        { description: 'Swap Parts', notes: 'Compare Prices', projectId: 3 },
        { description: 'TroubleShoot Issues', notes: 'Refer to Manual', projectId: 3 }
      ]);
    });
};
0