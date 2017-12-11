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
        { context: 'shire' }, // 1
        { context: 'fellowship of the ring' }, // 2
        { context: 'frodo' }, // 3
        { context: 'rivendell' }, // 4
        { context: 'bree' }, // 5
        { context: 'sam' }, // 6
        { context: 'merry' }, // 7
        { context: 'gimli' }, // 8
        { context: 'gandalf' }, // 9
        { context: 'aragorn' }, // 10
        { context: 'moria' }, // 11
        { context: 'boromir' }, // 12
        { context: 'legolas' }, // 13
        { context: 'prancing pony' } // 14
      ]);
    });
};
