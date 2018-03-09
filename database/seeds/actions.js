exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('actions').insert([
        {
          actId: 1,
          name: 'googlefu',
          description: 'exercise your google',
          notes: 'google is king'
        },
        {
          actId: 3,
          name: 'goto library',
          description: 'excercise your dewey decimals',
          notes: 'not necessary'
        },
        {
          actId: 2,
          name: 'print reference material',
          description: 'printfu',
          notes: 'must complete'
        }
      ]);
    });
};
