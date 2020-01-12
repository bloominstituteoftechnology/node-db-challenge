
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { resource_name: 'Escape Budget Management',
        resource_description: 'Government Program that organizes school budgets'
      },
      { resource_name: 'Lambda Curriculum',
      resource_description: 'Lambda Training Kit, Slack Channel'
    },
    { resource_name: 'Perserverance and Hope',
    resource_description: 'Stamina, Strong Belief, Acceptance'
  },
      ]);
    });
};
