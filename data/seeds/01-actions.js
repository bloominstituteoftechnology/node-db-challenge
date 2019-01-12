exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('actions').insert([
        {
          project_id: 1,
          notes: 'rowValue1',
          description: 'some silly description',
          completed: false
        },
        {
          project_id: 2,
          notes: 'rowValue2',
          description: 'some silly description',
          completed: false
        },
        {
          project_id: 3,
          notes: 'rowValue3',
          description: 'some silly description',
          completed: false
        },
        {
          project_id: 4,
          notes: 'rowValue1',
          description: 'some silly description',
          completed: true
        },
        {
          project_id: 7,
          notes: 'rowValue2',
          description: 'some silly description',
          completed: false
        },
        {
          project_id: 5,
          notes: 'rowValue3',
          description: 'some silly description',
          completed: true
        },
        {
          project_id: 9,
          notes: 'rowValue1',
          description: 'some silly description',
          completed: false
        },
        {
          project_id: 2,
          notes: 'rowValue2',
          description: 'some silly description',
          completed: false
        },
        {
          project_id: 3,
          notes: 'rowValue3',
          description: 'some silly description',
          completed: false
        },
        {
          project_id: 5,
          notes: 'rowValue1',
          description: 'some silly description',
          completed: false
        },
        {
          project_id: 2,
          notes: 'rowValue2',
          description: 'some silly description',
          completed: false
        },
        {
          project_id: 3,
          notes: 'rowValue3',
          description: 'some silly description',
          completed: false
        },
        {
          project_id: 4,
          notes: 'rowValue1',
          description: 'some silly description',
          completed: false
        },
        {
          project_id: 2,
          notes: 'rowValue2',
          description: 'some silly description',
          completed: false
        },
        {
          project_id: 3,
          notes: 'rowValue3',
          description: 'some silly description',
          completed: false
        }
      ]);
    });
};
