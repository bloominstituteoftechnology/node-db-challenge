exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Contexts')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('Contexts').insert([
        { context: 'home' },
        { context: 'at computer' },
        { context: 'office' },
        { content: 'shire' }, // 1
        { content: 'fellowship of the ring' }, // 2
        { content: 'frodo' }, // 3
        { content: 'rivendell' }, // 4
        { content: 'bree' }, // 5
        { content: 'sam' }, // 6
        { content: 'merry' }, // 7
        { content: 'gimli' }, // 8
        { content: 'gandalf' }, // 9
        { content: 'aragorn' }, // 10
        { content: 'moria' }, // 11
        { content: 'boromir' }, // 12
        { content: 'legolas' }, // 13
        { content: 'prancing pony' } // 14
      ]);
    });
};
