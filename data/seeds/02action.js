exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('actions').insert([
        {
          id: 1,
          notes: 'find the Brain!',
          description: 'search cheese factories',
          p_id: 1,
          done: 0,
        },
        {
          id: 2,
          notes: 'redux is awesome',
          description: 'learn react',
          p_id: 2,
          done: 1,
        },
        {
          id: 3,
          notes: "there's a lot more to node than express",
          description: 'learn node',
          p_id: 2,
          done: 0,
        },
        {
          id: 4,
          notes: 'APIs yo',
          description: 'learn express',
          p_id: 2,
          done: 0,
        },
        {
          id: 5,
          notes: 'joins FTW!',
          description: 'master SQL',
          p_id: 2,
          done: 0,
        },
        {
          id: 6,
          notes: 'the bane of my existence',
          description: 'CSS',
          p_id: 2,
          done: 0,
        },
      ]);
    });
};
