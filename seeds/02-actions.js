
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('actions').insert([
        {
          project_id: 1,
          name: 'Study',
          description: 'Go through the training kit',
          notes:
            'Please fill out Introduction to Data Modeling because thats what I dont understand',
        },
        {
          project_id: 1,
          name: 'Cry',
          description: 'i dont get this',
          notes: 'lol i dont understand databases',
        },
        {
          project_id: 2,
          name: 'Watch videos',
          description: 'Look up some youtube tutorials',
          notes: 'TraversyMedia is good, but you will probably get distracted and watch memes instead',
        },
        {
          project_id: 2,
          name: 'Get distracted',
          description: 'Give up and learn it later',
          notes: 'Later is always good',
        }
      ]);
    });
};
