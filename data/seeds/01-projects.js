exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'rowValue1', description: 'ahah!', completed: false },
        {
          name: 'rowValue2',
          description: 'some description',
          completed: false
        },
        {
          name: 'rowValue3',
          description: 'is it gonna work?',
          completed: false
        },
        { name: 'rowValue1', description: 'what is this', completed: false },
        {
          name: 'rowValue2',
          description: 'some description',
          completed: false
        },
        { name: 'rowValue3', description: 'idk any of this', completed: false },
        {
          name: 'rowValue1',
          description: 'try something new',
          completed: false
        },
        { name: 'rowValue2', description: 'lol', completed: true },
        { name: 'rowValue3', description: 'some description', completed: false }
      ]);
    });
};
