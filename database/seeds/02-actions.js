exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          description: 'actions description 1',
          notes: 'actions note1',
          iscomplete: true,
          projectId: 1
        },
        {
          description: 'actions description 2',
          notes: 'actions note2',
          iscomplete: false,
          projectId: 1
        },
        {
          description: 'actions description 3',
          notes: 'actions note3',
          iscomplete: true,
          projectId: 3
        },
        {
          description: 'actions description 4',
          notes: 'actions note4',
          iscomplete: true,
          projectId: 4
        },
        {
          description: 'actions description 5',
          notes: 'actions note5',
          iscomplete: true,
          projectId: 5
        },
        {
          description: 'actions description 6',
          notes: 'actions note6',
          iscomplete: true,
          projectId: 6
        },
      ]);
    });
};
