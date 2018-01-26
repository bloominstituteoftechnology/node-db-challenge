exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'project1',
          description: 'description1',
          iscomplete: true,
          actionIds: JSON.stringify({ "ids": [1, 2] }),
          contextIds: JSON.stringify({ "ids": [1] })
        },
        {
          name: 'project2',
          description: 'description2',
          iscomplete: false,
          actionIds: JSON.stringify({ "ids": [4] }),
          contextIds: JSON.stringify({ "ids": [2, 3] })
        },
        {
          name: 'project3',
          description: 'description3',
          iscomplete: true,
          actionIds: JSON.stringify({ "ids": [4] }),
          contextIds: JSON.stringify({ "ids": [4] })
        },
        {
          name: 'project4',
          description: 'description4',
          iscomplete: false,
          actionIds: JSON.stringify({ "ids": [5] }),
          contextIds: JSON.stringify({ "ids": [5] })
        },
        {
          name: 'project5',
          description: 'description5',
          iscomplete: true,
          actionIds: JSON.stringify({ "ids": [6] }),
          contextIds: JSON.stringify({ "ids": [6] })
        },
      ]);
    });
};
