
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { id: 1,
          name: 'Node DB Sprint Challenge',
            description: 'Test all the skills I learned this week',
          completed: true
        },
        { id: 2,
          name: 'Lunch Challenge',
            description: 'Enjoy a delicious and filling meal',
          completed: false
        }
      ]);
    });
};
